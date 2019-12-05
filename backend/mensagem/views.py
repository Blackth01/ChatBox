from django.shortcuts import render

from django.http import JsonResponse


from .models import Mensagem
from sala.models import Sala
from usuario.models import Usuario

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from django.views.decorators.csrf import csrf_exempt

import json

class Mensagem_view(APIView):
	permission_classes = (IsAuthenticated,)
	
	@csrf_exempt
	def post(self, request):
		conteudo = json.loads(request.body.decode("utf-8"))
		conteudo_msg = conteudo['conteudo']
		sala_id = conteudo['sala_id']

		print(conteudo)
		print("###############")
		sala = Sala.objects.filter(id=sala_id).first()

		if sala is None:
			return JsonResponse({'msg':'A sala escolhida é inválida!'})

		usuario = Usuario.objects.filter(id=request.user.id).first()
		mensagem = Mensagem(conteudo=conteudo_msg, remetente=usuario, sala=sala)

		mensagem.save()

		return JsonResponse({'sucesso':1, 'id_gerado':mensagem.id, 'username':usuario.nome, 'mensagem':conteudo_msg})

@csrf_exempt
def get_by_sala(request, id_sala):
	if request.method == 'GET':
		sala_id = id_sala
		
		mensagens = Mensagem.objects.filter(sala__id=sala_id).order_by('-id')[:10]

		lista = []
		for mensagem in mensagens:
			dicionario = {}
			dicionario['id'] = mensagem.id
			dicionario['conteudo'] = mensagem.conteudo
			dicionario['data_envio'] = mensagem.data_envio
			dicionario['id_remetente'] = mensagem.remetente.id
			dicionario['nome_remetente'] = mensagem.remetente.nome
			lista.append(dicionario)

		return JsonResponse({'mensagens':lista})

@csrf_exempt
def get_latest_by_id(request, id_sala, mensagem_id):
	if request.method == 'GET':
		sala_id = id_sala
		mensagem_id = mensagem_id

		mensagens = Mensagem.objects.filter(id__gte=mensagem_id, sala__id=sala_id).all()

		lista = []
		for mensagem in mensagens:
			dicionario = {}
			dicionario['id'] = mensagem.id
			dicionario['conteudo'] = mensagem.conteudo
			dicionario['data_envio'] = mensagem.data_envio
			dicionario['id_remetente'] = mensagem.remetente.id
			dicionario['nome_remetente'] = mensagem.remetente.nome
			lista.append(dicionario)

		return JsonResponse({'mensagens':lista})
