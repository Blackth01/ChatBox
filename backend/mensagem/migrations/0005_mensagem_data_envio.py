# Generated by Django 2.2.7 on 2019-11-30 21:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mensagem', '0004_auto_20191121_0254'),
    ]

    operations = [
        migrations.AddField(
            model_name='mensagem',
            name='data_envio',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 11, 30, 21, 3, 27, 43620)),
        ),
    ]
