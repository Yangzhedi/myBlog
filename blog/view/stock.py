#coding=utf-8
import json
from django.core.paginator import Paginator
from django.shortcuts import render
from blog.models import BlogsPost
from django.shortcuts import render_to_response
from django.template import loader,Context
from django.http import HttpResponse
import time
import os
import csv
from django.http import StreamingHttpResponse
from spider.stockSpider import sharesCrawl

# 股票文件下载
def big_file_download(request,code):
    # do something...
    print code
    def file_iterator(file_name, chunk_size=512):
        with open(file_name) as f:
            while True:
                c = f.read(chunk_size)
                if c:
                    yield c
                else:
                    break

    the_file_name = "data/"+code+".csv"
    response = StreamingHttpResponse(file_iterator(the_file_name))
    response['Content-Type'] = 'application/octet-stream'
    response['Content-Disposition'] = 'attachment;filename="{0}"'.format(the_file_name.split('/')[1])

    return response

def stock_code_search(request):
    print request.GET["value"]
    code = request.GET["value"]
    if(len(code) == 6):
        print 'success'
        # print os.listdir('data')
        token = False
        for filecode in os.listdir('data'):
            if code+'.csv' == filecode:
                token =True
                print '已经有了这个文件，我就不爬了'
        if token == False:
            print '还没有这个文件，我就爬了下'
            sharesCrawl(code, 2017, 1)
        return HttpResponse({code})
    else:
        return HttpResponse({'fail':1222})