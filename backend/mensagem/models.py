from django.db import models
from usuario.models import Usuario
from sala.models import Sala
# Create your models here.

class Mensagem(models.Model):
	conteudo = models.TextField(max_length=200)
	remetente = models.ForeignKey(Usuario, related_name="remetente", \
	on_delete=models.CASCADE)
	sala = models.ForeignKey(Sala, on_delete=models.CASCADE)
	destinatario = models.ForeignKey(Usuario, null=True, blank=True, related_name="destinatario", \
	on_delete=models.DO_NOTHING)

	def __str__(self):
		return self.conteudo
