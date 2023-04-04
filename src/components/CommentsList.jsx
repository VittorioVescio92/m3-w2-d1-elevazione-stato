import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddComment from "./AddComment";
class CommentsList extends Component {
  render() {
    return (
      <>
        <ListGroup className="d-flex flex-column align-items-center">
          {this.props.comments.map(comment => (
            <SingleComment
              key={comment.elementId}
              author={comment.author}
              comment={comment.comment}
              rate={comment.rate}
            />
          ))}
        </ListGroup>
        <AddComment />
      </>
    );
  }
}
export default CommentsList;
