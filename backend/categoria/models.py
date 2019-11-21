from django.db import models

# Create your models here.

class Categoria(models.Model):
	nome = models.CharField(max_length=64, unique=True)
	descricao = models.TextField(max_length=500)

	def __str__(self):
		return self.nome
