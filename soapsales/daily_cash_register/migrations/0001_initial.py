# Generated by Django 3.0.7 on 2020-08-18 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CashRegister',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('system', models.CharField(default='Physical Cash', max_length=256)),
                ('currency', models.CharField(blank=True, default='', max_length=64)),
                ('balance', models.DecimalField(blank=True, decimal_places=5, default=0, max_digits=20)),
                ('comment', models.CharField(default='', max_length=256)),
                ('is_open', models.BooleanField(default=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('cashed_amount', models.DecimalField(blank=True, decimal_places=5, default=0.0, max_digits=20, null=True)),
            ],
        ),
    ]
