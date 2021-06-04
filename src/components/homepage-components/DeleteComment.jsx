import { Component } from "react";
class DeleteComment extends Component {
  state = {};
  deleteComment = async () => {
    await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: this.props.apiKey,
          "Content-type": "application/json",
        },
      }
    );
    alert("The comment has been deleted");
    window.location.reload();
  };
  render() {
    return (
      <div>
        <button onClick={() => this.deleteComment()}>delete comment</button>
      </div>
    );
  }
}

export default DeleteComment;
