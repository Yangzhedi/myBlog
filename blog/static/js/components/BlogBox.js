var React = require("react");

var BlogBox = React.createClass({
    render:function(){
        return(
            <div className="blog-box">
                <h2 className="item-head"><a href="javascript:void(0)">{this.props.title}</a></h2>
                <span> {this.props.timestamp} By {this.props.author}</span>
                <p>{this.props.body}</p>
                <span><a href="javascript:void(0)"> 阅读全文 </a></span>
                <hr style={{border:'1px dashed #929292', width:'70%',height:1,position:'absolute'}}/>
            </div>
        )
    }
});

module.exports = BlogBox;