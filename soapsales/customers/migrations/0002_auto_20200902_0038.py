# Generated by Django 3.0.7 on 2020-09-01 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customers', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='customer_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='customeraddress',
            name='type',
            field=models.CharField(blank=True, choices=[('shipping', 'SHIPPING ADDRESS'), ('billing', 'BILLING ADDRESS')], max_length=150),
        ),
    ]
