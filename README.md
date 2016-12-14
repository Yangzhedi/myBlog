# myBlog
一个前端React后端Django的建议blog模版，还在完善中

`git clone https://github.com/Yangzhedi/myBlog`

在`blog/static/js`中 加入kindeditor富文本编辑器。

`cd blog/static/js` 运行 `npm install` 安装依赖

（如果没有webpack）请`npm install -g webpack` 全局安装webpack 

再 `webpack --watch` 监听前端代码编译，再开启django的服务器。

具体的react前端部分日记请移步[前端部分](blog/static/js/README.md)

后端：

安装一些必须的模块之后，在根目录的命令行中，

`python manage.py makemigrations` 之后 `python manage.py migrate` 更新下数据库

再`python manage.py runserver` 开启服务器。

`python manage.py createsuperuser`之后，`127.0.0.1:8000/admin`即可进入后台，

开启服务器之后，

- [x] `http://127.0.0.1:8000/index`  是前后分离版，ajax调用后台博客数据已经完成。
- [ ] `http://127.0.0.1:8000/index2` 是前后未分离版，可以进入后台修改博客在前台展示。

两版均已增加单页弹出博客。

具体的后端部分日记请移步[后端部分](blog/README.md)