# Generated by Django 2.2.7 on 2019-11-21 02:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mensagem', '0002_mensagem_sala'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mensagem',
            name='destinatario',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='destinatario', to='usuario.Usuario'),
        ),
    ]
