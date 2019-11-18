from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializers import UsuarioSerializer
from .models import Usuario

class UsuarioViewSet(viewsets.ModelViewSet):
	queryset = Usuario.objects.all().order_by('nome')
	serializer_class = UsuarioSerializer
