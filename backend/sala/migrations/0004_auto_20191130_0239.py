# Generated by Django 2.2.7 on 2019-11-30 02:39

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sala', '0003_salabanido_salausuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salabanido',
            name='last_seen',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 11, 30, 2, 39, 19, 204671)),
        ),
        migrations.AlterField(
            model_name='salausuario',
            name='last_seen',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 11, 30, 2, 39, 19, 204068)),
        ),
    ]