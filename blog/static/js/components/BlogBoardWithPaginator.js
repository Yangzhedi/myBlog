var React = require("react");
var BlogBox = require("./BlogBox");

var BlogBoardWithPainator = React.createClass({
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
            url:'/API/ajax_page',
            type : "POST",
            data : data,
            success:function(response,stutas,xhr){
                console.log(JSON.parse(response));
                var responseData = JSON.parse(response);
                this.setState({
                   data:responseData.page
                });

            }.bind(this)
        });
    },
    componentWillMount : function(){
        // this.getContent();
    },
    render : function(){
        return(
            <div>
               lalalalalal
            </div>
        )
    }
});

module.exports = BlogBoardWithPainator;