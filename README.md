yangzhedi.com网站源码
=================

[![ENV](https://img.shields.io/badge/python-2.7-blue.svg)](https://github.com/Yangzhedi/myBlog)
[![ENV](https://img.shields.io/badge/django-1.10-blue.svg)](https://github.com/Yangzhedi/myBlog)
[![ENV](https://img.shields.io/badge/react-0.14-blue.svg)](https://github.com/Yangzhedi/myBlog)
[![ENV](https://img.shields.io/badge/bulid-passing-brightgreen.svg)](https://github.com/Yangzhedi/myBlog)

yzd的个人网站：[www.yangzhedi.top](http://www.yangzhedi.top)

一个前端React后端Django的简易网站模版，
blog功能和股票爬虫功能已经大体实现，其余功能还在更新中。

#### 更新日记

 - **2016.10.30**  网站上线，并托管在github上，[Yangzhedi/myBlog](https://github.com/Yangzhedi/myBlog)，前后端分离，前端选用React框架，后端采用Django框架，数据库是django框架自带数据库。可以实现后台生成博客，ajax读取博客数据，并在前端展示。
 - **2016.11.2**  增加了博客的单页展示
 - **2016.11.20**   增加了博客的tags标签模块。
 - **2016.12.1**   增加了前端的分页功能，将想要获取的页数，通过GET请求发送给后台，后台返回该页数据。
 - **2016.12.4**    分页button的样式修改完成。
 - **2016.12.14**  blog内容实现富文本编辑
 - **2016.1.25**   下载功能实现。
 - **2016.1.26**  网站总体路由由React-router实现
 - **2016.1.31**  爬去股票数据并下载功能实现，只支持2017第一季度的爬取和下载。
 - **2016.2.11**  前端代码改写ES6，清除部分es5残留代码
 - **2016.2.12**  blog内容放弃富文本，改用markdown格式，单页页面过滤规则实现。
 - **2016.2.23**  股票爬取loading过渡完成。
 - **2016.2.27**  股票爬取提供在线预览功能。
---
#### 安装方法

`git clone https://github.com/Yangzhedi/myBlog`

`cd blog/static/js` 运行 `npm install` 安装依赖

（如果没有webpack）请`npm install -g webpack` 全局安装webpack 

再 `webpack --watch` 生成bundle.js监听前端代码编译，

后端安装一些必须的模块之后，在根目录的命令行中，

`python manage.py makemigrations` 之后 `python manage.py migrate` 更新下数据库

再`python manage.py runserver` 开启服务器（默认是8000端口）。

`python manage.py createsuperuser` 建立管理员之后，`127.0.0.1:8000/admin`即可进入后台，
