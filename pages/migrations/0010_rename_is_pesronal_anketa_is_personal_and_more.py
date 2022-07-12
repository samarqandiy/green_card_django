# Generated by Django 4.0.5 on 2022-07-04 06:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0009_auto_20220702_2234'),
    ]

    operations = [
        migrations.RenameField(
            model_name='anketa',
            old_name='is_pesronal',
            new_name='is_personal',
        ),
        migrations.AlterField(
            model_name='anketa',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='member',
            name='fam_anket',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='members', to='pages.anketa'),
        ),
        migrations.AlterField(
            model_name='member',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]