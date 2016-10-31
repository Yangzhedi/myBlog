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
    return render_to_response('index.html', {'posts': blog_list})
    # if request.method == "POST":
    #     name = request.POST.get('name')
    #     status = 0
    #     result = "Error!"
    #     return HttpResponse(json.dumps({
    #         "status": status,
    #         "result": result
    #     }))


    # posts = BlogsPost.objects.all()
    # t = loader.get_template("index.html")
    # c = Context({'posts': posts})
    # return HttpResponse(t.render(c))

def ajax_dict(request):
    name_dict = {'twz': 'Love python and Django', 'zqxt': 'I am teaching Django'}
    blog_list = BlogsPost.objects.all()
    # data = []
    # for i,value in enumerate(blog_list):
    #     data[i]={}
    #     data[i]["title"] = value.title
    #
    postData = {
        'result':[]
    }
    status = 111
    for i in blog_list:
        blog={
            "title":i.title,
            "body": i.body,
            "author": i.author,
            "timestamp":i.timestamp.strftime('%Y-%m-%d')
        }
        postData['result'].append(blog)
    result = "Error!"
    # return HttpResponse(json.dumps({
    #     "status":status,
    #     "result":result
    # }))
    return HttpResponse(json.dumps(postData))

def soft_filter(request,fami):
    softtype=''
    ajax_release_version=[]
    release_version=[]
    if request.is_ajax():
        softtype=request.GET.get('type_id')
        soft_type=SoftTypeRef.objects.using('vul').filter(description=softtype)
        soft_tp_id=0
        for i in soft_type:
            soft_tp_id= i.soft_type_id
        web_soft=SoftWeb.objects.using('vul').filter(soft_type_id=soft_tp_id)
        for i in web_soft:
            ajax_release_ver=i.release_version
            ajax_release_version.append(ajax_release_ver)
        return HttpResponse(json.dumps(ajax_release_version), content_type='application/json')

def get_ajax(request):
    if request.method == "POST":
        name = request.POST.get('name')
        status = 0
        result = "Error!"
        return HttpResponse(json.dumps({
            "status": status,
            "result": result
        }))

















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