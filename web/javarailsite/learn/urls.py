from django.urls import path
from django.template import loader

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('profile', views.profile, name='profile'),
    path('progress', views.progress, name='progress`'),
    path('challenge/<int:challenge_id>/', views.challenge, name='challenge'),
    path('runJavaCode', views.run_java_code, name='runJavaCode'),
    
    path('blog', views.blog, name='blog'),
    path('login', views.login, name='login'),
]
