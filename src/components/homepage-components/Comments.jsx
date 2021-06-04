import { Component } from "react";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComment";

class Comments extends Component {
  state = {
    comments: [],
    apiKey: "",
  };
  componentDidMount = async () => {
    let username = "mikelitoris34@icloud.com";
    let password = "bollocks69";
    let request = await fetch(
      `https://striveschool-api.herokuapp.com/api/account/login?username=${username}&password=${password}`,
      {
        method: "POST",
      }
    );
    let key = await request.json();
    this.setState({
      apiKey: "Bearer " + key.access_token,
    });

    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization: this.state.apiKey,
        },
      }
    );
    let comments = await response.json();
    this.setState({
      comments: comments,
    });
  };
  render() {
    return (
      <>
        <br />
        {this.state.comments.length === 0 ? (
          <span>No comments to display</span>
        ) : (
          this.state.comments.map((comment) => (
            <div key={comment._id}>
              <span>
                {comment.comment} by {comment.author}
              </span>
              <DeleteComment apiKey={this.state.apiKey} id={comment._id} />
            </div>
          ))
        )}
        <AddComment apiKey={this.state.apiKey} id={this.props.id} />
      </>
    );
  }
}

export default Comments;
