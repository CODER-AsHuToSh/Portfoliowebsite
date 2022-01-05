
from django.urls import path, include
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

#article_list, article_details, ArticleList, ArticleDetails

router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')


urlpatterns = [
    path('api/', include(router.urls)),

]
