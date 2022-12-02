from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from Annotation.models import *
# from Annotation.serializers import *
import json
from rest_framework import status
# Create your views here.
from django.db.models import Sum
import re
from django.core.paginator import Paginator
@csrf_exempt
def articleUploadAPI(request):
	#USED THIS
	max_word = 0
	new_list = []
	article = request.POST.get('article_text')
	text = re.sub(r'^https?:\/\/.*[\r\n]*', '', article, flags=re.MULTILINE)
	split_sentence = text.splitlines()
	article_model = Article(status='0')
	article_model.save()
	last_article = Article.objects.all().values().order_by('article_id').last()
	unknow_FE = Frame.objects.get(frame_id=1)


	for i in range(len(split_sentence)):
		# Sentence Level
		word_list=[]
		word_order_list=[]
		word = split_sentence[i].split("|")
		new_list = list(filter(lambda a: a != ' ', word))
		new_list = list(filter(lambda a: a != '', new_list))
		

		# print(unknow_FE)
		sentence_model = Sentence(sentence_order=i+1,article_id=Article.objects.all().order_by('article_id').last(),
		status='0',sentence={'Word':'','Word_order':'','Word_relation':0})
		sentence_model.save()

		last_sen = Sentence.objects.all().values().order_by('sentence_id').last()


		s_label= Sentence_label(sentence_id=sentence_model,frame_id=unknow_FE)
		s_label.save()

		print(last_sen['sentence_id'])
		for j in range(len(new_list)):
			# Word Level
			word_list.append(new_list[j])
			word_order_list.append(j+1)
			
			#ไม่แน่ใจ ว่ายังต้องใช้มัย comment ไว้ก่อน
			# frame_model = Frame(frame_name="unknows",frame_desc="unknows")
			# frame_model.save()
			#last_frame = Frame.objects.all().order_by('frame_id').last()

			word_model = Word_Label(word_order=j+1,sentence_id=sentence_model,label={'POS':'','Frame':''})
			word_model.save()

		sentence_update = Sentence.objects.filter(sentence_id=last_sen['sentence_id']).update(sentence={'Word':word_list,'Word_order':word_order_list,'Word_relation':[]})
	return JsonResponse({'result': 'Success'},safe=False)

@csrf_exempt
def getArticle(request):
	allArticle =  Article.objects.filter(status=0).values()

	list_article = []
	for i in allArticle:
		list_article.append(i)
		# print(i['article_id'])
		# Sentence.objects.filter(article_id=i['article_id']).values()
	return JsonResponse({"data":list_article},status = status.HTTP_200_OK)

@csrf_exempt
def getArticlePage(request,pagenumber,s):
	if(s==1):
		allArticle =  Article.objects.all().values().order_by('article_id')
		p = Paginator(allArticle, 10)
		page1 = p.page(pagenumber)
		objp = page1.object_list
		list_page =[]
		for i in objp:
			list_page.append(i)
	else:
		allArticle =  Article.objects.filter(status=s).values()
		p = Paginator(allArticle, 10)
		page1 = p.page(pagenumber)
		objp = page1.object_list
		list_page =[]
		for i in objp:
			list_page.append(i)
	return JsonResponse({'result': list_page},safe=False)


@csrf_exempt
def getPageNumber(request,s):
	if(s==1):
		allArticle = Article.objects.all().values().order_by('article_id')
		p = Paginator(allArticle, 10)
	else:
		allArticle =  Article.objects.filter(status=s).values()
		p = Paginator(allArticle, 10)

	
	print(len(allArticle),p.count)
	return JsonResponse({'result':p.num_pages})


@csrf_exempt
def getSentence_ArticleID(request,aid):
	# aid = 16
	# print(aid)
	list_article = []
	objArticle = Sentence.objects.filter(article_id=aid,status=0).values()
	for i in objArticle:
		list_article.append(i)
	return JsonResponse({"data":list_article},status = status.HTTP_200_OK)

@csrf_exempt
def getSentence_HistoryID(request,aid):
	# aid = 16
	# print(aid)
	list_article = []
	# หากต้องการแสดงเฉพาะประโยคที่ save label แล้ว เติม status=1 ใน filter
	objArticle = Sentence.objects.filter(article_id=aid).values()
	for i in objArticle:
		list_article.append(i)
	return JsonResponse({"data":list_article},status = status.HTTP_200_OK)

@csrf_exempt
def getSentence_sid(request,sid):
	list_sentence = []
	objSentence = Sentence.objects.filter(sentence_id=sid).values()
	for i in objSentence:
		list_sentence.append(i)
	return JsonResponse({"data":list_sentence},status = status.HTTP_200_OK)

@csrf_exempt
def postLabels(request):
	print(request.POST)
	aid = request.POST['aid']
	sid = request.POST['sid']
	POSL = dict(request.POST)["POSL[]"]
	FE = dict(request.POST)["FEL[]"]

	SFE = request.POST['SFEL']
	SFEany = request.POST['SFEA']
	relation = dict(request.POST)["relation[]"]
	print(relation)
	relation_S=Sentence.objects.get(sentence_id=sid)
	relation_S.sentence['Word_relation'] = relation
	relation_S.save()
	# <----------------------Frame Label ของ sentence------------------------->
	if SFEany == 'not_new':
		Sentence_label.objects.filter(sentence_id=sid).update(frame_id=SFE)
	else:
		FrameL = Frame(frame_name=SFEany,frame_desc=SFEany)
		FrameL.save()
		Sentence_label.objects.filter(sentence_id=sid).update(frame_id=FrameL)
	
	# <--------------------------------------------------------------------------->

	
	for i in range(len(POSL)):
		Word_Label.objects.filter(sentence_id=sid,word_order=i+1).update(label={'POS':POSL[i],'Frame':FE[i]})

	Sentence.objects.filter(sentence_id=sid).update(status='1')
	# เช็คว่าทุก sentence status =1 รึยัง ถ้า แล้วให้ปรับ status article
	check_sentence = Sentence.objects.filter(article_id=aid).values()

	# statu_sum = Sentence.objects.aggregate(Sum('status'))
	statu_sum = 0
	for c in check_sentence:
		statu_sum +=int(c['status'])

	if statu_sum == len(check_sentence):
		print("check")
		Article.objects.filter(article_id=aid).update(status='1')

	return JsonResponse("Added Successfully",status = status.HTTP_200_OK,safe=False)

@csrf_exempt
def addFrame(request):
	FE = request.POST["FE_label"]
	FEdes= request.POST["FE_des"]

	FrameL = Frame(frame_name=FE,frame_desc=FEdes)
	FrameL.save()
	return JsonResponse("Added Successfully",status = status.HTTP_200_OK,safe=False)

@csrf_exempt
def getWordLabel(request,sid):
	list_sentence = []
	list_pos=[]
	list_FE =[]
	objSentence = Sentence.objects.filter(sentence_id=sid).values()
	objSL = Sentence_label.objects.filter(sentence_id=sid).values()
	objWL = Word_Label.objects.filter(sentence_id=sid).values()
	# print(objSL[0]['frame_id_id'])
	objSFrame = Frame.objects.filter(frame_id=objSL[0]['frame_id_id']).values()
	for i in objWL:
		
		list_pos.append(i['label']['POS'])
		list_FE.append(i['label']['Frame'])
	list_sentence.append({
		'Sentence_model':objSentence[0],
		'Sentence_label_model': objSFrame[0],
		'POS': list_pos,
		'FEs':list_FE,

		})
	
	return JsonResponse({"data":list_sentence},status = status.HTTP_200_OK,safe=False)

@csrf_exempt
def getFinishArticle(request):
	allArticle =  Article.objects.filter(status=1).values()
	list_article = []
	for i in allArticle:
		list_article.append(i)
	return JsonResponse({"data":list_article},status = status.HTTP_200_OK)

@csrf_exempt
def updateSentence(request):
	aid = request.POST['aid']
	sid = request.POST['sid']
	POSL = dict(request.POST)["POSL[]"]
	FE = dict(request.POST)["FEL[]"]
	relation = dict(request.POST)["relation[]"]
	
	SFE = request.POST['SFEL']
	SFEany = request.POST['SFEA']
	objSL=Sentence_label.objects.filter(sentence_id=sid).values()

	relation_S=Sentence.objects.get(sentence_id=sid)
	relation_S.sentence['Word_relation'] = relation
	relation_S.save()

	# <----------------------Frame Label ของ sentence------------------------->
	objSFrame = Frame.objects.filter(frame_id=objSL[0]['frame_id_id']).values()
	# if objSL[0]['frame_id_id'] >30:
	# 	objSFrame = Frame.objects.filter(frame_id=objSL[0]['frame_id_id']).values()
	# 	if SFEany != objSFrame[0]['frame_name']:
	# 		FrameL = Frame(frame_name=SFEany,frame_desc=SFEany)
	# 		FrameL.save()
	# 		Sentence_label.objects.filter(sentence_id=sid).update(frame_id=FrameL)
	# else:
	# 	Sentence_label.objects.filter(sentence_id=sid).update(frame_id=SFE)

	if SFEany == 'not_new':
		Sentence_label.objects.filter(sentence_id=sid).update(frame_id=SFE)
	else:
		if SFEany != objSFrame[0]['frame_name']:
			FrameL = Frame(frame_name=SFEany,frame_desc=SFEany)
			FrameL.save()
			Sentence_label.objects.filter(sentence_id=sid).update(frame_id=FrameL)
	
	# <--------------------------------------------------------------------------->

	
	for i in range(len(POSL)):
		Word_Label.objects.filter(sentence_id=sid,word_order=i+1).update(label={'POS':POSL[i],'Frame':FE[i],'Word_relation':0})

	return JsonResponse("Added Successfully",status = status.HTTP_200_OK,safe=False)

@csrf_exempt
def draftLabels(request):
	print(request.POST)
	aid = request.POST['aid']
	sid = request.POST['sid']
	POSL = dict(request.POST)["POSL[]"]
	FE = dict(request.POST)["FEL[]"]

	SFE = request.POST['SFEL']
	SFEany = request.POST['SFEA']
	relation = dict(request.POST)["relation[]"]
	print(relation)
	relation_S=Sentence.objects.get(sentence_id=sid)
	relation_S.sentence['Word_relation'] = relation
	relation_S.save()
	# <----------------------Frame Label ของ sentence------------------------->
	if SFEany == 'not_new':
		Sentence_label.objects.filter(sentence_id=sid).update(frame_id=SFE)
	else:
		FrameL = Frame(frame_name=SFEany,frame_desc=SFEany)
		FrameL.save()
		Sentence_label.objects.filter(sentence_id=sid).update(frame_id=FrameL)
	
	# <--------------------------------------------------------------------------->

	
	for i in range(len(POSL)):
		Word_Label.objects.filter(sentence_id=sid,word_order=i+1).update(label={'POS':POSL[i],'Frame':FE[i]})


	return JsonResponse("Added Successfully",status = status.HTTP_200_OK,safe=False)