# Generated by Django 3.2.23 on 2023-12-22 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20231222_1024'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='location',
            field=models.CharField(default='Denmark', max_length=100),
            preserve_default=False,
        ),
    ]