import React, {Component} from 'react';


class BlogHeader extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
    };
    render(){
        return(
            <div className="blog-header">
                11111111
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"> My Blog </a>
                            <a className="navbar-brand" target="_blank" href="https://github.com/Yangzhedi"> github </a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

module.exports = BlogHeader;