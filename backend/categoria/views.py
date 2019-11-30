from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets

from .serializers import CategoriaSerializer

from .models import Categoria
from usuario.models import Usuario

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.views.decorators.csrf import csrf_exempt


import json

class CategoriaViewSet(viewsets.ModelViewSet):
	queryset = Categoria.objects.all().order_by('nome')
	serializer_class = CategoriaSerializer

class Categoria_view(APIView):
	permission_classes = (IsAuthenticated,)

	@csrf_exempt
	def post(self, request):
		conteudo = json.loads(request.body.decode("utf-8"))
		nome = conteudo['nome']
		descricao = conteudo['descricao']

		usuario = Usuario.objects.filter(id=request.user.id).first()

		if(not usuario.admin):
			return JsonResponse({'msg':'É necessário ser um admin para cadastrar uma categoria!'})

		if Categoria.objects.filter(nome=nome).exists():
			return JsonResponse({'msg':'Esta categoria já existe!'})
		else:
			categoria = Categoria(nome=nome, descricao=descricao)

			categoria.save()

			return JsonResponse({'sucesso':1})
