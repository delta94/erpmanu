# Generated by Django 3.0.7 on 2020-09-07 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0002_auto_20200902_0038'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderitem',
            name='received',
            field=models.FloatField(blank=True, default=0.0, null=True),
        ),
    ]
