// normaly it's json loaded as async
var datadata = [
  {author: "Pete Hunt", text: "This is one commentttttttt"},
  {author: "Jorda Wakle", text: "This is *another* commentttttttttt"}
];




var Comment = React.createClass({
  render: function(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString())}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      )
    });
    return (
      <div className="commentList">
         {commentNodes}
      </div>
    )
    // return (
    //   <div className="commentList">
    //     <Comment author="Pete Hunt">This is one comment</Comment>
    //     <Comment author="Jordan Walke">This is *another* comment</Comment>
    //   </div>

    // );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>

    );
  }
});

ReactDOM.render(
  // <CommentBox url="api/comments" />,
  <CommentBox data={datadata} />,
  document.getElementById('content')
);

// ReactDOM.render(
//   <Comment />,
//   document.getElementById('content')
// );
