from . import views
# from views import # some view(s)

from django.urls import path, include

urlpatterns = [
    path('', views.home, name='home'),
    path('home/', views.home, name='home'),
    path('anketa/submit/', views.add_anket, name='add_anketa'),
    path('anketa/', views.anketa, name='anketa'),
    path('service/', views.service, name='service'),
    path('about/', views.about, name='about'),
]
