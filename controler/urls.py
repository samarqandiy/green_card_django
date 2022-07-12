from django.urls import path
from . import views
from .views import AnketaDetailView, AnketaDeleteView

urlpatterns = [
    path('anketas/', views.anketaListView, name='anketa_list'),
    path('anketa/<int:pk>/', AnketaDetailView.as_view(), name='anketa_detail'),
    path('anketa/<int:pk>/delete/', AnketaDeleteView.as_view(), name='anketa_delete'),
]