var React = require("react");
var BlogBoard = require("./components/BlogBoard");
var BlogBoardWithPaginator = require("./components/BlogBoardWithPaginator");

React.render(<BlogBoard/>,document.getElementById("blog-container"));
// React.render(<BlogBoardWithPaginator/>,document.getElementById("blog-container"));