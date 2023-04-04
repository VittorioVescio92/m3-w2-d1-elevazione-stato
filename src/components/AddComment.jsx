import { Component } from "react";
import { Form, Button } from "react-bootstrap";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzMxMjY4MzQzMTAwMTRkZWE3NjEiLCJpYXQiOjE2ODA1MjQwNTAsImV4cCI6MTY4MTczMzY1MH0.LP8fehJyM-iPCgOwm4Qa_PyYUIVCO9giwhA8P8ogogQ";
class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: "",
  };

  handleCommentChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleElementIdChange = event => {
    event.preventDefault();
    this.setState({ elementId: event.target.value });
  };

  handleRatingChange = event => {
    this.setState({ rate: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Errore nell'invio del commento");
        }
        return response.json();
      })
      .then(data => {
        this.props.onCommentAdded(data);
        this.setState({ comment: "", rate: 1, elementId: this.props.asin });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formElementId">
            <Form.Label>NomeUtente:</Form.Label>
            <Form.Control as="textarea" value={this.state.elementId} onChange={this.handleElementIdChange} row="1" />
          </Form.Group>

          <Form.Group controlId="formComment">
            <Form.Label>Recensione:</Form.Label>
            <Form.Control as="textarea" value={this.state.comment} onChange={this.handleCommentChange} row="3" />
          </Form.Group>

          <Form.Group controlId="formRating">
            <Form.Label>Voto:</Form.Label>
            <Form.Control as="select" value={this.state.rating} onChange={this.handleRatingChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Aggiungi recensione
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;
