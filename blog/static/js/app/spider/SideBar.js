import React, {Component} from 'react';
'use strict';
class SideBar extends Component{
    constructor(props){
        super(props);

        this.state = {
        };


    };
    
    render() {
        return(
            <div className="col-lg-4">
                <div className="side-bar">
                    <h4>About This</h4>
                    <p>这是功能可以提供股票数据下载。</p>
                </div>
                <div className="side-bar">
                    <h4>诚征AD</h4>
                    <span>联系邮箱：uiryzd@163.com</span>
                </div>
                <div className="side-bar">
                    <h4>诚征AD</h4>
                    <span>联系邮箱：uiryzd@163.com</span>
                </div>
                <div className="side-bar">
                    <h4>诚征AD</h4>
                    <span>联系邮箱：uiryzd@163.com</span>
                </div>
            </div>

        );
    }
}
export default SideBar;