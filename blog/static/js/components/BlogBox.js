var React = require("react");

var BlogBox = React.createClass({
    render : function(){
        return(
            <div className="blog-box">
                <h2 className="item-head"><a href="javascript:void(0)">blog</a></h2>
                <p>11111111111111111111111111111111111111111111111
                    1111111111111111111111111111
                    1111111111111111111111111111
                    1111111111111111111111111111111111111111111111111111</p>
                <span><a href="javascript:void(0)">获取更多</a></span>
                <hr style={{border:'1px dashed #929292', width:'70%',height:1,position:'absolute'}}/>
            </div>
        )
    }
});

module.exports = BlogBox;