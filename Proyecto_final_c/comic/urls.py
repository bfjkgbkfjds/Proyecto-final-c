# comic/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.comic_index, name='comic_index'),
]
