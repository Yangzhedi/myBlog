var React = require("react");
var BlogBox = require("./BlogBox");

var BlogBoard = React.createClass({
    getInitialState : function(){
        return {
            data: []
        }
    },
    getContent:function(){
        $.ajax({
            url:'/index/ajax_dict',
            type : "GET",
            success:function(response,stutas,xhr){
                console.log(JSON.parse(response));
                var responseData = JSON.parse(response);
                this.setState({
                   data:responseData.result
                });

            }.bind(this)
        });
    },
    componentWillMount : function(){
        this.getContent();
    },
    render : function(){
        console.log(this.state.data[0]);
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
            </div>
        )
    }
});

module.exports = BlogBoard;