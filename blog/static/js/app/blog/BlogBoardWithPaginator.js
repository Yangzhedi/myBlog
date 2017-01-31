var React = require("react");
var BlogBox = require("./BlogBox");

var BlogBoardWithPainator = React.createClass({
    getInitialState(){
        return {
            data: [],
            pageNow:1,
            pageCount:'',
            rightState:true,
            leftState:false
        }
    },
    getContent(page){
        var data = {
            page : page
        };
        $.ajax({
            url:'/API/ajax_page',
            type : "GET",
            data : data,
            success:function(response,stutas,xhr){
                // console.log(JSON.parse(response));
                var responseData = JSON.parse(response);
                this.setState({
                    data:responseData.page.page_result,
                    pageCount:responseData.page.count
                });

            }.bind(this)
        });
    },
    componentWillMount(){
        this.getContent(this.state.pageNow);
    },
    leftHandler(){
        if(this.state.pageNow-1 > 0){
            this.setState({
                pageNow : this.state.pageNow-1,
                rightState:true
            });
            if(this.state.pageNow == 2){
                this.setState({
                    leftState:false
                })
            }
            this.getContent(this.state.pageNow-1)
        }else{
            console.error('之前没有数据');
            this.setState({
                leftState:false
            })
        }
    },
    rightHandler(){
        if(this.state.pageNow < this.state.pageCount){
            this.setState({
                pageNow : this.state.pageNow+1,
                leftState:true
            });
            this.getContent(this.state.pageNow+1);
            if(this.state.pageNow == this.state.pageCount-1){
                this.setState({
                    rightState:false
                })
            }
        }else{
            console.error('之后没有数据');
            this.setState({
                rightState:false
            })
        }
        console.log(this.state.rightState + 'in rightHandler')
    },
    render(){
        // console.log(this.state.data)
        // console.log(this.state.pageCount)
        return(
            <div className="row">
                <div className="col-lg-8">
                    {
                        this.state.data.map(function(item,index){
                            return(
                                <BlogBox key={index} title={item.title} body={item.body} id={item.id} tag={item.tag}
                                         author={item.author} timestamp={item.timestamp}/>
                            )
                        })
                    }
                    <div>
                        <button className="icon item" onClick={this.leftHandler} disabled={!this.state.leftState}>
                              <i className="left-arrow"> {'<'} </i>
                        </button>
                        <div style={{display:'inline-block'}}>{this.state.pageNow}/{this.state.pageCount}</div>
                        <button className="icon item" onClick={this.rightHandler} disabled={!this.state.rightState}>
                              <i className="right-arrow"> {'>'} </i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-list">
                        <h4>About Me</h4>
                        <p>国际关系学院 信息系统与信息管理专业大四在读，这个网站是为了React和Django的实践以及一些爬虫的练手的展示用途，
                            将来还有可能搞一搞机器学习啊什么的。</p>
                    </div>
                    <div className="blog-list">
                        <h4>Build this blog with:</h4>
                        <p>FrontEnd:React,jQuery,Bootstrap</p>
                        <p>BackEnd:Django</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = BlogBoardWithPainator;