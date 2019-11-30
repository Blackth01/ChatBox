from django.urls import include, path
from . import views

urlpatterns = [
    path('registrar/', views.Sala_view.as_view(), name='Sala_view'),
    path('listar/categoria/<int:id_categoria>/', views.get_by_categoria, name="Get by categoria"),
]