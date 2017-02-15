import React, {Component} from 'react';
import stockCode from './stockCode'
import SideBar from './SideBar'
'use strict';
class StockSpider extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: '',
            linkIsShow: false,
            linkContent: '',
            arr: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    };

    handleChange(e){
        console.log(e.target.value);
        this.setState({
            // 去除空格
            value: e.target.value.replace(/\s/g, "").slice(0,6)
        })
    }

    handleClick(e){
        // console.log(e.target);
        this.setState({
            linkContent: ''
        });
        if(this.state.value.length == 6){
            var data = {
                value: this.state.value
            };
            $.ajax({
                url:'/API/stock-code-search',
                type : "GET",
                data : data,
                success:function(response,stutas,xhr){
                    // console.log('response is ');
                    // console.log(response);
                    this.setState({
                        linkContent: 'Download'+response+'.csv',
                        linkIsShow: true
                    })
                }.bind(this)
            });
        }

    }

    handleSearch(){
        // console.log(stockCode.allSHcode)
        var this_ = this;
        var bool = false;
        var idx = 0;
        stockCode.allSHcode.forEach(function(item,index) {
            if(item == this_.state.value){
                bool = true;
                idx = index;
            }
        });
        console.log(stockCode.allSHcodeWithName[idx])
    }

    componentWillMount(){
        console.warn('还在开发中，如果想用，请输入正确的6位股票代码。')
    }

    render() {
        var stockLink = "stock-link";
        if(this.state.linkContent){
            stockLink+="show";
        }
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
                        <input type="text" value={this.state.value}
                           onChange={this.handleChange}/>
                        <button className='spider-button btn-4'
                                onClick={this.handleSearch}>验证</button>
                        <button className='spider-button' disabled={!this.state.value}
                                onClick={this.handleClick}>开始爬取</button>
                    </div>

                    <div className="loading">
                        <p>正在查询股票代码</p>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a className={stockLink} href={downloadHref}>{this.state.linkContent}</a>
                </div>
                <SideBar/>
            </div>

        );
    }
}
export default StockSpider;