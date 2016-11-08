#coding=utf-8
import json
from django.core.paginator import Paginator
from django.shortcuts import render
from blog.models import BlogsPost
from django.shortcuts import render_to_response
from django.template import loader,Context
from django.http import HttpResponse
import time
from datetime import datetime


def index(request):
    blog_list = BlogsPost.objects.all()
    return render_to_response('index.html', {'posts': blog_list})
    # posts = BlogsPost.objects.all()
    # t = loader.get_template("index.html")
    # c = Context({'posts': posts})
    # return HttpResponse(t.render(c))

def ajax_dict(request):
    blog_list = BlogsPost.objects.all()
    # data = []
    # for i,value in enumerate(blog_list):
    #     data[i]={}
    #     data[i]["title"] = value.title
    #
    postData = {
        'status':200,
        'result':[]
    }
    status = 111
    for i,value in enumerate(blog_list):
        blog={
            "id":value.id,
            "title":value.title,
            "body": value.body,
            "author": value.author,
            "timestamp":value.timestamp.strftime('%Y-%m-%d')
        }
        postData['result'].append(blog)
    # return HttpResponse(json.dumps({
    #     "status":status,
    #     "result":result
    # }))
    return HttpResponse(json.dumps(postData))

def search_id(request, id):
#     try:
#     tm = time.strptime(blog_time.encode(),'%Y-%m-%d %H:%M:%S')
#     tm = datetime(2016,10,31,04,05)
    post = BlogsPost.objects.get(id = id)
#     except BlogsPost.DoesNotExist:
#         raise Http404('Article does not exists')
    return render(request, 'blog/blog.html', {'post': post})


def ajax_time(request):
    blog_list = BlogsPost.objects.all()
    time_list = []
    for i in blog_list:
        time_list.append(i.timestamp.strftime("%Y%m%d%H%M%S"))
        print i
    return HttpResponse(json.dumps({"time":time_list}))




def index2(request):
    limit = 4
    blog_list = BlogsPost.objects.all()
    paginatior = Paginator(blog_list, limit)
    page = request.GET.get('page', 1)
    loaded = paginatior.page(page)
    content = {'posts':loaded}
    return render_to_response('index2.html',content)


def main(request):
    list = ['view', 'Json', 'JS']
    return render(request, 'main.html', {
        'List': json.dumps(list),
    })

def hello(request):
    return HttpResponse("Hello world")

def blog1(request):
    blog_list = BlogsPost.objects.all();
    post = blog_list[0]
    # print blog_list+"11111"
    return render_to_response('../templates/blog/blog.html', {'post':post})