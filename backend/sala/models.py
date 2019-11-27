from django.db import models
from usuario.models import Usuario
from categoria.models import Categoria
from datetime import datetime
# Create your models here.

class Sala(models.Model):
	nome = models.CharField(max_length=60)
	senha = models.CharField(max_length=120, blank=True)
	categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
	admin = models.ForeignKey(Usuario, on_delete=models.CASCADE)

	def __str__(self):
		return self.nome

class SalaUsuario(models.Model):
	last_seen = models.DateTimeField(default=datetime.now(), blank=True)
	sala = models.ForeignKey(Sala, on_delete=models.CASCADE)
	usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

class SalaBanido(models.Model):
	last_seen = models.DateTimeField(default=datetime.now(), blank=True)
	sala = models.ForeignKey(Sala, on_delete=models.CASCADE)
	banido = models.ForeignKey(Usuario, on_delete=models.CASCADE)
