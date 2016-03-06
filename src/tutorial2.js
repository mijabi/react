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
  handleSubmit: function(e){
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if(!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author" />
        <input type="text" placeholder="Say something" ref="text" />
        <input type="submit" value="Post" />
        // Hello, world! I am a CommentForm.
      </form>
    );
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function(){
    $.ajax({
      url: this.props.url,
      datatype: 'json',
      cache: false,
      success: function(data){
        this.setState({data: data});

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status,err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment) {
    // TODO: send to server, reflesh comment list
    console.log('POST data, refles comment list from callback')
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    console.log('did mount')
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>

    );
  }
});

ReactDOM.render(
  // <CommentBox url="api/comments" />,
  <CommentBox url="test.json" pollInterval={2000} />,
  document.getElementById('content')
);

// ReactDOM.render(
//   <Comment />,
//   document.getElementById('content')
// );
