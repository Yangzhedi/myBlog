var React = require("react");
var BlogBox = require("./BlogBox");

var BlogBoard = React.createClass({
    render : function(){
        return(
            <div>
                <BlogBox/>
                <BlogBox/>
            </div>
        )
    }
});

module.exports = BlogBoard;