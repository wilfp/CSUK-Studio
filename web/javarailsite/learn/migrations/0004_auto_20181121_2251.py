# Generated by Django 2.1.3 on 2018-11-21 22:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0003_auto_20181121_2125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='challenge',
            name='path',
            field=models.CharField(max_length=200),
        ),
    ]
