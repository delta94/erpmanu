# Generated by Django 3.0.7 on 2020-09-01 22:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20200902_0038'),
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='employee',
            name='account',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.Account'),
        ),
        migrations.AlterField(
            model_name='contract',
            name='reference_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='department',
            name='reference_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='employee',
            name='employee_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='leave',
            name='reference_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='paygrade',
            name='reference_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='termination',
            name='reference_number',
            field=models.CharField(default=None, max_length=255, null=True, unique=True),
        ),
    ]