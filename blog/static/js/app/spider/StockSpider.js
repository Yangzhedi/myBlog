import React, {Component} from 'react';
/*
let Chart = React.createClass({
    handleChange(){
        
    },
    render() {
        return(
            <div>
                即将推出股票数据打包下载功能，敬请期待。。。
                <a href="/data/1.txt">HAVE A TRY !!!</a>
                <input type="text" onChange={this.handleChange}/>
            </div>
        );
    }
});

export default Chart;  */
class StockSpider extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: '',
            linkIsShow: false,
            linkContent: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleChange(e){
        // console.log(e.target.value);
        this.setState({
            // 去除空格
            value: e.target.value.replace(/\s/g, "")
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

    componentWillMount(){
        console.error('还在开发中，如果想用，请输入正确的6位股票代码。')
    }

    render() {
        var stockLink = "stock-link";
        if(this.state.linkContent){
            stockLink+="show";
        }
        var downloadHref = '/data/'+this.state.value;
        return(
            <div>
                <div>
                    <p style={{fontSize:10,color:'#e42b2b'}}>*还在开发中，input过滤还不是很完善，如果想用，请输入正确的6位股票代码。</p>
                    <input type="text" value={this.state.value}
                       onChange={this.handleChange}/>
                    <button className='spider-button' disabled={!this.state.value}
                            onClick={this.handleClick}>开始爬取</button>
                </div>
                <a className={stockLink} href={downloadHref}>{this.state.linkContent}</a>
            </div>
        );
    }
}
export default StockSpider;