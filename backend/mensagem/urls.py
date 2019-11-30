from django.urls import include, path
from . import views

urlpatterns = [
    path('registrar/', views.Mensagem_view.as_view(), name='Mensagem_view'),
    path('listar/sala/<int:id_sala>/', views.get_by_sala, name="Get by sala"),
    path('listar/sala/<int:id_sala>/<int:mensagem_id>', views.get_latest_by_id, name="Get latest by id"),
]