from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets

from .serializers import CategoriaSerializer

from .models import Categoria

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class CategoriaViewSet(viewsets.ModelViewSet):
	queryset = Categoria.objects.all().order_by('nome')
	serializer_class = CategoriaSerializer

class Categoria_view(APIView):
	permission_classes = (IsAuthenticated,)

	def post(self, request):
		conteudo = json.loads(request.body.decode("utf-8"))
		nome = conteudo['nome']
		descricao = conteudo['descricao']

		if Categoria.objects.filter(nome=nome).exists():
			return JsonResponse({'msg':'Esta categoria já existe!'})
		else:
			categoria = Categoria(nome=nome, descricao=descricao, senha=senha1)

			categoria.save()

			return JsonResponse({'sucesso':1})


'''
def registrar(request):
	if request.method == 'POST':
		conteudo = json.loads(request.body.decode("utf-8"))
		nome = conteudo['nome']
		descricao = conteudo['descricao']

		if Categoria.objects.filter(nome=nome).exists():
			return JsonResponse({'msg':'Esta categoria já existe!'})
		else:
			categoria = Usuario(nome=nome, descricao=descricao, senha=senha1)

			categoria.save()

			return JsonResponse({'sucesso':1})
'''