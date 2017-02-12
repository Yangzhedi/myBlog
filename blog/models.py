from __future__ import unicode_literals

from django.db import models

from django.contrib import admin
# Create your models here.
class BlogsPost(models.Model):
    title = models.CharField(max_length=150)
    body = models.TextField()
    author = models.CharField(max_length=50, default='Timi')
    timestamp = models.DateTimeField()
    blog_id = models.IntegerField(default=0)
    tag = models.CharField(max_length=20, default='python')

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'timestamp', 'author', 'id')

    # class Media:
    #     js = (
    #         '/static/js/kindeditor-4.1.10/kindeditor-min.js',
    #         '/static/js/kindeditor-4.1.10/lang/zh_CN.js',
    #         '/static/js/kindeditor-4.1.10/config.js',
    #     )

admin.site.register(BlogsPost,BlogPostAdmin)