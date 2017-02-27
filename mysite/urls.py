#coding=utf-8
"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

from django.conf.urls import url, include
from django.contrib import admin

# from . import blog.views
from blog.views import index, hello, main, blog1, index2, ajax_dict, ajax_page, search_id, ajax_crx

from blog.view.stock import stock_code_search, big_file_download, file_download

# url用正则表达式
urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', index),
    url(r'^index/$', index),

    url(r'^index2/$', index2),
    url(r'^hello/$', hello),
    url(r'^main/', main),
    url(r'^index2/blog/blog1', blog1),
    url(r'^API/ajax_dict/$', ajax_dict),
    url(r'^API/ajax_page/$', ajax_page),
    url(r'^API/ajax_crx/$', ajax_crx),


    url(r'^blog/(?P<id>\d+)/$', search_id, name='page'),

    url(r'^online/data/(?P<code>\d{6})$', file_download),
    url(r'^data/(?P<code>\d{6})$', big_file_download),
    url(r'^API/stock-code-search/$', stock_code_search),
]
