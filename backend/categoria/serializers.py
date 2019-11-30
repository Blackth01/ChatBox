from rest_framework import serializers

from .models import Categoria

class CategoriaSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Categoria
		fields = ('id', 'nome', 'descricao')