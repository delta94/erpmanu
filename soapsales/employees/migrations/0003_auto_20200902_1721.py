# Generated by Django 3.0.7 on 2020-09-02 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0002_auto_20200902_0038'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='is_staff',
            new_name='is_admin',
        ),
        migrations.AlterField(
            model_name='employee',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]
