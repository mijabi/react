// normaly it's json loaded as async
var datadata = [
  {author: "Pete Hunt", text: "This is one commentttttttt"},
  {author: "Jorda Wakle", text: "This is *another* commentttttttttt"}
];




var Comment = React.createClass({displayName: "Comment",
  render: function(){
    return(
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
        marked(this.props.children.toString())
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      )
    });
    return (
      React.createElement("div", {className: "commentList"}, 
         commentNodes
      )
    )
    // return (
    //   <div className="commentList">
    //     <Comment author="Pete Hunt">This is one comment</Comment>
    //     <Comment author="Jordan Walke">This is *another* comment</Comment>
    //   </div>

    // );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return (
      React.createElement("div", {className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )

    );
  }
});

ReactDOM.render(
  // <CommentBox url="api/comments" />,
  React.createElement(CommentBox, {data: datadata}),
  document.getElementById('content')
);

// ReactDOM.render(
//   <Comment />,
//   document.getElementById('content')
// );
