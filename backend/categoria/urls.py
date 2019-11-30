from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'categorias', views.CategoriaViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cadastrar/', views.Categoria_view.as_view(), name='categoria_view'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]