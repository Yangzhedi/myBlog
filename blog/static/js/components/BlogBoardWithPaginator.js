var React = require("react");
var BlogBox = require("./BlogBox");

var BlogBoardWithPainator = React.createClass({
    getInitialState : function(){
        return {
            data: [],
            pageNow:1,
            pageCount:''
        }
    },
    getContent:function(page){
        var data = {
            page : page
        };
        $.ajax({
            url:'../API/ajax_page',
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
    componentWillMount : function(){
        this.getContent(this.state.pageNow);
    },
    leftHandler(){
        if(this.state.pageNow-1 > 0){
            this.setState({
                pageNow : this.state.pageNow-1
            });
            this.getContent(this.state.pageNow-1)
        }else{
            console.error('之前没有数据')
        }
    },
    rightHandler(){
        if(this.state.pageNow < this.state.pageCount){
            this.setState({
                pageNow : this.state.pageNow+1
            });
            this.getContent(this.state.pageNow+1);
        }else{
            console.error('之后没有数据')
        }
        console.log(this.state.pageNow + 'in rightHandler')
    },
    render : function(){
        // console.log(this.state.data)
        // console.log(this.state.pageCount)
        return(
            <div>
                {
                    this.state.data.map(function(item,index){
                        return(
                            <BlogBox title={item.title} body={item.body} id={item.id} tag={item.tag}
                                     author={item.author} timestamp={item.timestamp}/>
                        )
                    })
                }
                <div>
                    <a class="icon item" onClick={this.leftHandler}>
                          <i class="left-arrow"> {'<'} </i>
                    </a>
                    <div style={{display:'inline-block'}}>{this.state.pageNow}/{this.state.pageCount}</div>
                    <a class="icon item" onClick={this.rightHandler}>
                          <i class="right-arrow"> {'>'} </i>
                    </a>
                </div>
            </div>
        )
    }
});

module.exports = BlogBoardWithPainator;