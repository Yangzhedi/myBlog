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
            value: e.target.value
        })
    }

    handleClick(e){
        // console.log(e.target);
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
                    linkContent: response
                })
            }.bind(this)
        });

        this.setState({
            linkIsShow: true
        })
    }

    render() {
        var stockLink = "stock-link";
        if(this.state.linkIsShow){
            stockLink+="show";
        }
        var downloadHref = '/data/'+this.state.value;
        return(
            <div>
                <div>
                    <input type="text" value={this.state.value}
                       onChange={this.handleChange}/>
                    <button className='spider-button' disabled={!this.state.value}
                            onClick={this.handleClick}>开始爬取</button>
                </div>
                <a className={stockLink} href={downloadHref}>{'Download'+this.state.linkContent+'.csv'}</a>
            </div>
        );
    }
}
export default StockSpider;