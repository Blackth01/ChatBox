# Generated by Django 2.2.7 on 2019-11-21 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sala', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sala',
            name='senha',
            field=models.CharField(blank=True, max_length=120),
        ),
    ]
