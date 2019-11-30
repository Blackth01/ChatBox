from django.shortcuts import render

from django.http import JsonResponse


from .models import Sala
from categoria.models import Categoria
from usuario.models import Usuario

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.views.decorators.csrf import csrf_exempt

import json

class Sala_view(APIView):
	permission_classes = (IsAuthenticated,)
	
	@csrf_exempt
	def post(self, request):
		conteudo = json.loads(request.body.decode("utf-8"))
		nome = conteudo['nome']
		senha = conteudo['senha']
		categoria_id = conteudo['categoria_id']

		categoria = Categoria.objects.filter(id=categoria_id).first()

		if categoria is None:
			return JsonResponse({'msg':'A categoria escolhida é inválida!'})

		if Sala.objects.filter(nome=nome).exists():
			return JsonResponse({'msg':'Esta sala já existe!'})
		else:
			admin = Usuario.objects.filter(id=1).first()
			sala = Sala(nome=nome, admin=admin, categoria=categoria, senha=senha)

			sala.save()

			return JsonResponse({'sucesso':1})

@csrf_exempt
def get_by_categoria(request, id_categoria):
	if request.method == 'GET':
		categoria_id = id_categoria
		
		salas = Sala.objects.filter(categoria__id=categoria_id).all()

		lista = []
		for sala in salas:
			dicionario = {}
			dicionario['id'] = sala.id
			dicionario['nome'] = sala.nome
			lista.append(dicionario) 
		return JsonResponse({'salas':lista})