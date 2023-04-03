import { Component } from "react";
import CommentsList from "./CommentsList";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzMxMjY4MzQzMTAwMTRkZWE3NjEiLCJpYXQiOjE2ODA1MjQwNTAsImV4cCI6MTY4MTczMzY1MH0.LP8fehJyM-iPCgOwm4Qa_PyYUIVCO9giwhA8P8ogogQ";

class CommentArea extends Component {
  state = {
    bookComments: [],
    isLoading: true,
  };

  fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          Authorization: key,
        },
      });
      const data = await response.json();
      this.setState({ bookComments: data, isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        {this.state.isLoading && <div>Loading...</div>}
        {!this.state.isLoading && this.state.bookComments.length === 0 && (
          <div>Non ci sono commenti per questo libro.</div>
        )}
        {!this.state.isLoading && this.state.bookComments.length > 0 && (
          <CommentsList comments={this.state.bookComments} />
        )}
      </>
    );
  }
}

export default CommentArea;
