# Generated by Django 2.2.7 on 2019-11-30 21:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sala', '0004_auto_20191130_0239'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salabanido',
            name='last_seen',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 11, 30, 21, 3, 27, 41616)),
        ),
        migrations.AlterField(
            model_name='salausuario',
            name='last_seen',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 11, 30, 21, 3, 27, 41013)),
        ),
    ]