import { Component } from "react";
import AddComment from "./AddComment";
import DeleteComment from "./DeleteComments";
class Comments extends Component {
  state = {
    asin: this.props.book.asin,
    comments: [],
  };
  componentDidMount = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.state.asin}`,
      {
        headers: {
          Authorization: this.props.apiKey,
        },
      }
    );
    let comments = await response.json();
    this.setState({
      comments,
    });
  };
  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <ul key={comment._id}>
            <div style={{ border: "1px solid black" }}>
              <div>
                <DeleteComment
                  commentId={comment._id}
                  apiKey={this.props.apiKey}
                />
              </div>
              <div>
                <li className="my-2">
                  Book ID is: {comment.elementId} | {comment.comment} | I rate
                  it {comment.rate}
                </li>
              </div>
            </div>
          </ul>
        ))}
        <AddComment apiKey={this.props.apiKey} asin={this.state.asin} />
      </div>
    );
  }
}

export default Comments;
