var React = require("react");

var BlogBox = React.createClass({

    render:function(){
        var aHref = '../blog/'+this.props.id;
        return(
            <div className="blog-box">
                <h2 className="item-head"><a href={aHref} target="_blank">{this.props.title}</a></h2>
                <p> {this.props.timestamp} By {this.props.author}</p>
                <p>{this.props.body.toString().slice(0,100)}... </p>
                <span><a href={aHref} target="_blank"> 阅读全文 {'>>'} {this.props.id}</a></span>
                <hr style={{border:'1px dashed #929292', width:'70%',height:1,position:'absolute'}}/>
            </div>
        )
    }
});

module.exports = BlogBox;