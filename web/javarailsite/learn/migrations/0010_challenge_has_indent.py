# Generated by Django 2.1.3 on 2019-03-09 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('learn', '0009_fileupload'),
    ]

    operations = [
        migrations.AddField(
            model_name='challenge',
            name='has_indent',
            field=models.BooleanField(default=False),
            preserve_default=False,
        ),
    ]
