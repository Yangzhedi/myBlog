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
                console.log(JSON.parse(response));
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
            <div className="">
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
        )
    }
});

module.exports = BlogBoardWithPainator;