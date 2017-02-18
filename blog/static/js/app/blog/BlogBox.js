import React, {Component} from 'react';
'use strict';

class BlogBox extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            tags: []
        };
    };
    
    //处理tags
    componentWillMount(){
        var tagsArr = [];
        tagsArr = this.props.tag.split(',');
        this.setState({
            tags:tagsArr
        })
    }
    componentWillReceiveProps(nextProps){
        var tagsArr = [];
        tagsArr = nextProps.tag.split(',');
        this.setState({
            tags:tagsArr
        })
    }
    render(){
        var aHref = '../blog/'+this.props.id;
        var clsName = "ico ico-";
        switch (this.props.classification ){
            case '原创':
                clsName += 'Original';
                break;
            case '转载':
                clsName += 'Repost';
                break;
            case '翻译':
                clsName += 'Translate';
        }
           
        return(
            <div className="blog-box">
                <h2 className="item-head">
                    <span className={clsName}> </span>
                    <a href={aHref} target="_blank">{this.props.title}</a>
                </h2>
                <p> {this.props.timestamp} By {this.props.author}</p>
                {
                    this.state.tags.map(function(item, index){
                        return <span key={index} className="blog-tag">{item}</span>
                    })
                }
                {/*<span className="blog-tag">{this.props.tag}</span>*/}
                <p>{this.props.body.toString().replace(/\#*\=*\`*/g,'').slice(0,300)}... </p>
                <span><a href={aHref} target="_blank"> 阅读全文 {'>>'}</a></span>
                <hr style={{border:'1px dashed #929292', width:'70%',height:1,position:'absolute'}}/>
            </div>
        )
    }
}
module.exports = BlogBox;