# Generated by Django 3.2.23 on 2023-12-22 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_testimonial_testimonial_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('company_name', models.CharField(max_length=200)),
                ('duration', models.CharField(max_length=250)),
                ('desc', models.TextField()),
            ],
        ),
    ]
