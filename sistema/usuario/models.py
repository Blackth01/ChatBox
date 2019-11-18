from django.db import models

# Create your models here.

class Usuario(models.Model):
	nome = models.CharField(max_length=64, unique=True)
	senha = models.CharField(max_length=120)
	admin = models.BooleanField(default=False)

	def __str__(self):
		return self.nome
