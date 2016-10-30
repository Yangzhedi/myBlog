#coding=utf-8
import json
from django.shortcuts import render
from blog.models import BlogsPost
from django.shortcuts import render_to_response
from django.template import loader,Context
from django.http import HttpResponse


def index(request):
    blog_list = BlogsPost.objects.all()
    # print blog_list+"11111"
    list = ['view', 'Json', 'JS']
    return render(request, 'index.html', {
        'List': json.dumps(list),
    })
    # return render_to_response('index.html',{'posts':blog_list})
    # posts = BlogsPost.objects.all()
    # t = loader.get_template("index.html")
    # c = Context({'posts': posts})
    # return HttpResponse(t.render(c))

def index2(request):
    blog_list = BlogsPost.objects.all()
    # print blog_list+"11111"
    return render_to_response('index2.html',{'posts':blog_list})

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
    return render_to_response('../templates/blog/blog1.html',{'post':post})