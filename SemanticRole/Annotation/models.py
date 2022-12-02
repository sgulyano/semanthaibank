from django.db import models

class Sentence(models.Model):
	sentence_id = models.AutoField(primary_key=True)
	sentence_order = models.IntegerField()
	article_id = models.ForeignKey('Article', on_delete=models.CASCADE)
	status = models.CharField(max_length=1)
	sentence = models.JSONField()

class Word_Label(models.Model):
	word_label_id = models.AutoField(primary_key=True)
	word_order = models.IntegerField()
	sentence_id = models.ForeignKey('Sentence', on_delete=models.CASCADE)
	label = models.JSONField() # 2 key :POS,FE

class Article(models.Model):
	article_id = models.AutoField(primary_key=True)
	status = models.CharField(max_length=1)
	#เก็บ label ลิงค์ Sentence

class Sentence_label(models.Model):
	sentence_id = models.ForeignKey('Sentence', on_delete=models.CASCADE)
	frame_id = models.ForeignKey('Frame',on_delete=models.CASCADE)
#ไป sentence , frame

class Frame(models.Model):
	frame_id = models.AutoField(primary_key=True)
	frame_name = models.CharField(max_length=255)
	frame_desc = models.TextField()

# # Create your models here.
# class Lexicon(models.Model):
# 	lexicon_id = models.AutoField(primary_key=True)
# 	frame_id = models.ForeignKey('Frame', on_delete=models.CASCADE)


# class Sentence(models.Model):
# 	sentence_id = models.AutoField(primary_key=True)
# 	sentence_order = models.IntegerField()
# 	article_id = models.ForeignKey('Article', on_delete=models.CASCADE)
# 	status = models.CharField(max_length=1)
# 	sentence = models.JSONField()

# class Word_Label(models.Model):
# 	word_label_id = models.AutoField(primary_key=True)
# 	word_order = models.IntegerField()
# 	sentence_id = models.ForeignKey('Sentence', on_delete=models.CASCADE)
# 	lexicon_id = models.ForeignKey('Lexicon', on_delete=models.CASCADE,null=True)
# 	label = models.JSONField()

# class Article(models.Model):
# 	article_id = models.AutoField(primary_key=True)
# 	status = models.CharField(max_length=1)

# class Frame(models.Model):
# 	frame_id = models.AutoField(primary_key=True)
# 	frame_name = models.CharField(max_length=255)
# 	frame_desc = models.TextField()