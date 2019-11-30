from django.shortcuts import render
from django.http import JsonResponse


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


def registrar(request):
	if request.method == 'POST':
		conteudo = json.loads(request.body.decode("utf-8"))
		nome = conteudo['nome']
		descricao = conteudo['descricao']
		senha1 = conteudo['senha1']
		senha2 = conteudo['senha2']

		if senha1 != senha2:
			return JsonResponse({'msg':'Os campos de senha se diferenciam!'})

		if User.objects.filter(username=username).exists():
			return JsonResponse({'msg':'Este username já existe!'})
		else:
			usuario = Usuario(nome=nome, descricao=descricao, senha=senha1)

			usuario.save()
			user = User.objects.create_user(username=username, password=senha1)

			user.save()

			return JsonResponse({'sucesso':1})


