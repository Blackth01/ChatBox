from django.shortcuts import render

from django.http import JsonResponse


from .models import Sala

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class Sala_view(APIView):
	permission_classes = (IsAuthenticated,)
	
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