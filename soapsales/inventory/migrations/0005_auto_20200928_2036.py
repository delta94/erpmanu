# Generated by Django 3.0.7 on 2020-09-28 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0004_auto_20200912_1359'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventoryitem',
            name='unit',
            field=models.CharField(choices=[('Ounce', 'OUNCE'), ('Pound', 'POUND'), ('Ton', 'TON'), ('Gram', 'GRAM'), ('Kilogram', 'KILOGRAM'), ('FluidOunce', 'FLUIDOUNCE'), ('Pint', 'PINT'), ('Quart', 'QUART'), ('Gallon', 'GALLON'), ('Milliliter', 'MILLILITER'), ('Metercubed', 'CUBICMETER'), ('MiliGram', 'MILIGRAM'), ('Liter', 'LITER'), ('Dozen', 'DOZEN'), ('Count', 'COUNT'), ('Cartoon', 'CARTOON')], max_length=100, null=True),
        ),
    ]
