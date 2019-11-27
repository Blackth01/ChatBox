from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'usuarios', views.UsuarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('hello/', views.HelloView.as_view(), name='hello'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
