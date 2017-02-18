#coding=utf-8
import json
from django.core.paginator import Paginator
from django.shortcuts import render
from blog.models import BlogsPost
from django.shortcuts import render_to_response
from django.template import loader,Context
from django.http import HttpResponse
import time
from markdown import markdown
import csv
from django.http import StreamingHttpResponse


def index(request):
    blog_list = BlogsPost.objects.all()
    return render_to_response('index.html', {'posts': blog_list})
    # posts = BlogsPost.objects.all()
    # t = loader.get_template("index.html")
    # c = Context({'posts': posts})
    # return HttpResponse(t.render(c))

def ajax_dict(request):
    blog_list = BlogsPost.objects.all()
    result = blog_list2json(blog_list)
    postData = {
        'status': 200,
        'result': result
    }
    return HttpResponse(json.dumps(postData))

def search_id(request, id):
#     try:
#     tm = time.strptime(blog_time.encode(),'%Y-%m-%d %H:%M:%S')
#     tm = datetime(2016,10,31,04,05)
    post = BlogsPost.objects.get(id=id)
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
    limit = 5
    blog_list = BlogsPost.objects.all()
    # for blog_item in blog_list:
    #     blog_item.body = markdown(blog_item.body)
    paginator = Paginator(blog_list, limit)
    page = request.GET.get('page', 1)
    loaded = paginator.page(page)
    content = {'posts': loaded}
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


def ajax_page(request):
    print request.GET["page"]
    pageNum = request.GET["page"]


    blog_list = BlogsPost.objects.all()
    paginator = Paginator(blog_list, 4)
    page = request.GET.get('page', 1)
    loaded = paginator.page(page)

    # paginator的range
    page_range = paginator.page_range   # xrange 对象
    first_page = page_range[0]
    last_page = page_range[-1]
    range = [first_page,last_page]
    # 开始处理分页数据
    page_result = []
    for i in page_range:
        page_result.append(blog_list2json(paginator.page(i).object_list))

    page_one = blog_list2json(paginator.page(pageNum).object_list)

    postData = {
        'status': 200,
        'page': {
            'count': paginator.num_pages,
            'range': range,
            'page_result': page_one
        }
    }

    # postData = blog_list2json(paginator.page(1).object_list)
    return HttpResponse(json.dumps(postData))


def blog_list2json(blog_list):
    result = []
    for i, value in enumerate(blog_list):
        blog = {
            "id": value.id,
            "title": value.title,
            "body": value.body,
            "author": value.author,
            "timestamp": value.timestamp.strftime('%Y-%m-%d'),
            "tag": value.tag,
            "classification": value.classification
        }
        result.append(blog)
    return result


# 实验下载功能
def file_download(request):
    # do something...
    with open('data/1.txt') as f:
        c = f.read()
    # c = open('data/601939.csv', 'wb')
    return HttpResponse(c)


def big_file_download(request):
    # do something...

    def file_iterator(file_name, chunk_size=512):
        with open(file_name) as f:
            while True:
                c = f.read(chunk_size)
                if c:
                    yield c
                else:
                    break

    the_file_name = "data/601939.csv"
    response = StreamingHttpResponse(file_iterator(the_file_name))
    response['Content-Type'] = 'application/octet-stream'
    response['Content-Disposition'] = 'attachment;filename="{0}"'.format(the_file_name.split('/')[1])

    return response
