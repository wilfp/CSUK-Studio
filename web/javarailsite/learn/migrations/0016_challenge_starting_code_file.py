# Generated by Django 2.1.3 on 2019-04-09 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0015_remove_challenge_starting_code_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='challenge',
            name='starting_code_file',
            field=models.CharField(default='', max_length=200),
            preserve_default=False,
        ),
    ]
