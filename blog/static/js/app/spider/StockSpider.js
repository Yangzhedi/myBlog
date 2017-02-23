import React, {Component} from 'react';
import stockCode from './stockCode'
import SideBar from './SideBar'
import AjaxFunction from '../util/AjaxFunction'
'use strict';

var linkLoading = false;
class StockSpider extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: '',
            linkIsShow: false,
            linkContent: '',
            stockContent:'',
            arr: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    };


    handleChange(e){
        // console.log(e.target.value);
        this.setState({
            // 去除空格
            value: e.target.value.replace(/\s/g, "").slice(0,6)
        })
    }

    handleClick(e){
        // console.log(e.target);
        var this_ = this;
        var bool = false;
        var idx = null;
        stockCode.allSHcode.forEach(function(item,index) {
            if(item == this_.state.value){
                bool = true;
                idx = index;
            }
        });
        this.setState({
            stockContent:stockCode.allSHcodeWithName[idx]
        });
        if(idx !== null){
            linkLoading = true;
            this.setState({
                linkContent: ''
            });
            if(this.state.value.length == 6){
                var data = {
                    value: this.state.value
                };
                AjaxFunction.ajax({
                    url:'/API/stock-code-search',
                    type : "GET",
                    data : data,
                    success:function(response,stutas,xhr){
                        // console.log('response is ');
                        // console.log(response);
                        this.setState({
                            linkContent: 'Download'+response+'.csv',
                            linkIsShow: true
                        });
                        linkLoading = false;
                    }.bind(this)
                });
            }
        }
        console.log(idx);
        console.log(stockCode.allSHcodeWithName[idx])


    }

    handleSearch(){
        // console.log(stockCode.allSHcode)
    }

    componentWillMount(){
        console.warn('还在开发中，如果想用，请输入正确的6位股票代码。')
    }

    render() {
        var stockContent = this.state.stockContent ? "show": "hidden";
        var stockLoading = linkLoading ? "show": "hidden";
        var stockLink = "stock-link";
        if(this.state.linkContent){
            stockLink += "show";
            stockLoading = 'hidden';
        }
        console.log(stockLoading);
        var downloadHref = '/data/'+this.state.value;
        return(
            <div className="row">
                <div className="col-lg-8">
                    <div>
                        <p style={{fontSize:10,color:'#e42b2b'}}>*还在开发中，input过滤还不是很完善，如果想用，请输入正确的6位股票代码。</p>
                        {
                            this.state.arr.map(function (item, index) {
                                return <span key={index}>{'\''+item+'\','}</span>
                            })
                        }
                        <input type="number" value={this.state.value}
                           onChange={this.handleChange}/>
                        {/*<button className='spider-button btn-4'
                                onClick={this.handleSearch}>验证</button>*/}
                        <button className='spider-button btn-4' disabled={!this.state.value}
                                onClick={this.handleClick}>爬取数据</button>
                    </div>
                    <div className="" className={stockContent}>
                        <p>已监测到股票：{this.state.stockContent}，开始为您爬取</p>
                    </div>
                    <div className={"loading "+stockLoading}>
                        <p>正在爬取股票数据</p>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </div>
                    <a className={stockLink} href={downloadHref}>{this.state.linkContent}</a>
                </div>
                <SideBar/>
            </div>

        );
    }
}
export default StockSpider;