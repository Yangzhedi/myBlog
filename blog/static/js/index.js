var React = require("react");
var BlogBoard = require("./app/blog/BlogBoard");
var BlogBoardWithPaginator = require("./app/blog/BlogBoardWithPaginator");

// React.render(<BlogBoard/>,document.getElementById("blog-container"));
React.render(<BlogBoardWithPaginator/>,document.getElementById("blog-container"));