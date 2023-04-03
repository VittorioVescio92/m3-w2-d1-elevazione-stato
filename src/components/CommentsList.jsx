import { Component } from "react";
import { ListGroupItem } from "react-bootstrap";

class CommentsList extends Component {
  render() {
    return (
      <ListGroupItem className="d-flex flex-column align-items-center">
        <span className="my-1">Author: {this.props.author}</span>
        <span className="my-1">Comment: {this.props.comment}</span>
        <span className="my-1">Rate: {this.props.rate}</span>
      </ListGroupItem>
    );
  }
}
export default CommentsList;
