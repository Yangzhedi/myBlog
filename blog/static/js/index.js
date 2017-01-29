/*
var React = require("react");
var BlogBoard = require("./app/blog/BlogBoard");
var BlogBoardWithPaginator = require("./app/blog/BlogBoardWithPaginator");

// React.render(<BlogBoard/>,document.getElementById("blog-container"));
React.render(<BlogBoardWithPaginator/>,document.getElementById("blog-container"));*/
import React from 'react'
import { render } from 'react-dom'

var ReactDOM = require('react-dom');
// 首先我们需要导入一些组件...
import { Router, Route, Link, browserHistory, hashHistory, IndexRoute  } from 'react-router'
import BlogBoard from './app/blog/BlogBoard';
import Chart from './app/spider/chart';
import BlogBoardWithPaginator from './app/blog/BlogBoardWithPaginator';
import Home from './app/home';

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
const App = React.createClass({
    render() {
            return (
            <div className="app-container">
            {/* 把 <a> 变成 <Link> */}
                <ul className="route-ul">
                    <li className="route-li"><Link to="/">首页</Link></li>
                    <li className="route-li"><Link to="/blog">我的博客</Link></li>
                    <li className="route-li"><Link to="/chart">待定</Link></li>
                </ul>

            {/*
             接着用 `this.props.children` 替换 `<Child>`
             router 会帮我们找到这个 children
             */}
                <div className="context-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render((
    <Router  history={hashHistory }>
        <Route path="/" component={App}>
            {/*  <IndexRoute component={BlogBoardWithPaginator} /> */}
            <IndexRoute component={Home} />
            <Route path="blog" component={BlogBoardWithPaginator} />
            <Route path="chart" component={Chart} />
        </Route>

    </Router>
), document.body);