var React = require("react");

var BlogBox = React.createClass({
    getInitialState : function(){
        return {
            tags: []
        }
    },
    //处理tags
    componentWillMount : function(){
        var tagsArr = [];
        tagsArr = this.props.tag.split(',');
        this.setState({
            tags:tagsArr
        })
    },

    render:function(){
        var aHref = '../blog/'+this.props.id;
        return(
            <div className="blog-box">
                <h2 className="item-head"><a href={aHref} target="_blank">{this.props.title}</a></h2>
                <p> {this.props.timestamp} By {this.props.author}</p>
                {
                    this.state.tags.map(function(item, index){
                        return <span key={index} className="blog-tag">{item}</span>
                    })
                }
                {/*<span className="blog-tag">{this.props.tag}</span>*/}
                <p>{this.props.body.toString().replace(/<\/?[^>]*>/g,'').slice(0,100)}... </p>
                <span><a href={aHref} target="_blank"> 阅读全文123 {'>>'} {this.props.id}</a></span>
                <hr style={{border:'1px dashed #929292', width:'70%',height:1,position:'absolute'}}/>
            </div>
        )
    }
});

module.exports = BlogBox;