var React = require("react");
var BlogBox = require("./BlogBox");

var BlogBoard = React.createClass({
    getInitialState : function(){
        return {
            data: []
        }
    },
    getContent:function(){
        var data = {
            page : 1
        };
        $.ajax({
            url:'../API/ajax_dict',
            type : "GET",
            data : data,
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
        console.log(this.state.data)
        return(
            <div>
                {
                    this.state.data.map(function(item,index){
                        return(
                            <BlogBox key={index} title={item.title} body={item.body} id={item.id} tag={item.tag}
                                     author={item.author} timestamp={item.timestamp}/>
                        )
                    })
                }
            </div>
        )
    }
});

module.exports = BlogBoard;