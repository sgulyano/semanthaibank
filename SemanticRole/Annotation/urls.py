from django.conf.urls import url
from django.urls import path,include
from Annotation import views

urlpatterns=[
	path('article_upload',views.articleUploadAPI),
	url('all_article',views.getArticle),
	path('get_sentence/<int:aid>',views.getSentence_ArticleID),
	path('postlabels',views.postLabels),
	path('getSentence_sid/<int:sid>',views.getSentence_sid),
	path('addFrame',views.addFrame),
	path('getHistorySentence/<int:sid>',views.getWordLabel),
	url('getFinishArticle',views.getFinishArticle),
	path('getSentence_HistoryID/<int:aid>',views.getSentence_HistoryID),
	path('updateSentence',views.updateSentence),
	path('getArticlePage/<int:pagenumber>/<int:s>',views.getArticlePage),
	path('getPageNumber/<int:s>',views.getPageNumber),
	path('draftLabels',views.draftLabels)
]