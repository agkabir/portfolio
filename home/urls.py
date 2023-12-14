from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('load-more/', views.load_more, name='load_more'),
]