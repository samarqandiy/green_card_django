# Generated by Django 3.1.14 on 2022-06-29 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='familar',
            name='payed',
            field=models.BooleanField(default=False, verbose_name='Pullik:'),
        ),
        migrations.AddField(
            model_name='personal',
            name='payed',
            field=models.BooleanField(default=False, verbose_name='Pullik:'),
        ),
    ]