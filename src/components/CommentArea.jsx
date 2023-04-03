import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    bookComments: [],
  };

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzMxMjY4MzQzMTAwMTRkZWE3NjEiLCJpYXQiOjE2ODA1MjQwNTAsImV4cCI6MTY4MTczMzY1MH0.LP8fehJyM-iPCgOwm4Qa_PyYUIVCO9giwhA8P8ogogQ",
        },
      });
      const data = await response.json();
      this.setState({ bookComments: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        {this.state.bookComments.length === 0 && <div>Non ci sono commenti per questo libro.</div>}
        {this.state.bookComments.length > 0 && (
          <ListGroup>
            {this.state.bookComments.map(comment => (
              <CommentsList
                key={comment.elementId}
                author={comment.author}
                comment={comment.comment}
                rate={comment.rate}
              />
            ))}
          </ListGroup>
        )}
      </>
    );
  }
}

export default CommentArea;
