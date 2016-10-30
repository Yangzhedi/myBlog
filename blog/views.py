#coding=utf-8
from django.shortcuts import render
from blog.models import BlogsPost
from django.shortcuts import render_to_response
from django.template import loader,Context
from django.http import HttpResponse
# Create your views here.
def index(request):
    blog_list = BlogsPost.objects.all()
    # print blog_list+"11111"
    return render_to_response('index.html',{'posts':blog_list})
    # posts = BlogsPost.objects.all()
    # t = loader.get_template("index.html")
    # c = Context({'posts': posts})
    # return HttpResponse(t.render(c))

def main(request):
    blog_list = BlogsPost.objects.all()
    return render_to_response('main.html')

def hello(request):
    return HttpResponse("Hello world")

def blog1(request):
    blog_list = BlogsPost.objects.all();
    post = blog_list[0]
    # print blog_list+"11111"
    return render_to_response('../templates/blog/blog1.html',{'post':post})