# Generated by Django 3.0.7 on 2020-09-08 20:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('manufacture', '0003_remove_processmachine_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historicalprocessproduct',
            name='location',
        ),
        migrations.RemoveField(
            model_name='processproduct',
            name='location',
        ),
    ]
