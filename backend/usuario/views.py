from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets

from .serializers import UsuarioSerializer
from .models import Usuario

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UsuarioViewSet(viewsets.ModelViewSet):
	queryset = Usuario.objects.all().order_by('nome')
	serializer_class = UsuarioSerializer


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


