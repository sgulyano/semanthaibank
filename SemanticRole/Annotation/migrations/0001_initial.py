# Generated by Django 3.2.4 on 2022-11-25 06:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('article_id', models.AutoField(primary_key=True, serialize=False)),
                ('status', models.CharField(max_length=1)),
            ],
        ),
        migrations.CreateModel(
            name='Frame',
            fields=[
                ('frame_id', models.AutoField(primary_key=True, serialize=False)),
                ('frame_name', models.CharField(max_length=255)),
                ('frame_desc', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Sentence',
            fields=[
                ('sentence_id', models.AutoField(primary_key=True, serialize=False)),
                ('sentence_order', models.IntegerField()),
                ('status', models.CharField(max_length=1)),
                ('sentence', models.JSONField()),
                ('article_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Annotation.article')),
            ],
        ),
        migrations.CreateModel(
            name='Word_Label',
            fields=[
                ('word_label_id', models.AutoField(primary_key=True, serialize=False)),
                ('word_order', models.IntegerField()),
                ('label', models.JSONField()),
                ('sentence_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Annotation.sentence')),
            ],
        ),
        migrations.CreateModel(
            name='Sentence_label',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('frame_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Annotation.frame')),
                ('sentence_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Annotation.sentence')),
            ],
        ),
    ]
