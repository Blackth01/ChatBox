from django.db import models
from usuario.models import Usuario
from categoria.models import Categoria
# Create your models here.


class Sala(models.Model):
	nome = models.CharField(max_length=60)
	senha = models.CharField(max_length=120, blank=True)
	categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
	admin = models.ForeignKey(Usuario, on_delete=models.CASCADE)

	def __str__(self):
		return self.nome
