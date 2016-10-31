from __future__ import unicode_literals

from django.db import models

from django.contrib import admin
# Create your models here.
class BlogsPost(models.Model):
    title = models.CharField(max_length = 150)
    body = models.TextField()
    author = models.CharField(max_length = 50)
    timestamp = models.DateTimeField()

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title','timestamp','author')

admin.site.register(BlogsPost,BlogPostAdmin)