# Generated by Django 2.1.3 on 2019-04-09 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0014_challenge_starting_code_file'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='challenge',
            name='starting_code_file',
        ),
    ]
