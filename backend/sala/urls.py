from django.urls import include, path
from . import views

urlpatterns = [
    path('cadastrar/', views.Sala_view.as_view(), name='Sala_view'),
]