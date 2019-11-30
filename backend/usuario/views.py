from django.shortcuts import render
from django.http import JsonResponse


from django.contrib.auth.models import User

# Create your views here.

from rest_framework import viewsets

from .serializers import UsuarioSerializer
from .models import Usuario

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from django.views.decorators.csrf import csrf_exempt

import json

class UsuarioViewSet(viewsets.ModelViewSet):
	queryset = Usuario.objects.all().order_by('nome')
	serializer_class = UsuarioSerializer


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    @csrf_exempt
    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)


@csrf_exempt
def registrar(request):
	if request.method == 'POST':
		conteudo = json.loads(request.body.decode("utf-8"))
		nome = conteudo['nome']
		descricao = conteudo['descricao']
		senha1 = conteudo['senha1']
		senha2 = conteudo['senha2']

		if senha1 != senha2:
			return JsonResponse({'msg':'Os campos de senha se diferenciam!'})

		if User.objects.filter(username=nome).exists():
			return JsonResponse({'msg':'Este username já existe!'})
		else:
			user = User.objects.create_user(username=nome, password=senha1)

			user.save()

			usuario = Usuario(id=user.id, nome=nome, descricao=descricao, senha=senha1)

			usuario.save()

			return JsonResponse({'sucesso':1})


