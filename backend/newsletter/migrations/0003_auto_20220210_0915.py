# Generated by Django 3.2.11 on 2022-02-10 08:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import newsletter.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('newsletter', '0002_auto_20220210_0912'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='created_timestamp',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(),
        ),
        migrations.AlterField(
            model_name='post',
            name='thumbnaill',
            field=models.ImageField(upload_to=newsletter.models.upload_post_image),
        ),
        migrations.AlterField(
            model_name='post',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
        ),
    ]
