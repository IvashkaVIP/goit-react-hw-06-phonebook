import { Component } from "react";

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  
  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit(this.state);
    // console.log(this.state);
    this.reset();
  };
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: ''});
    // console.log(this.state);
}

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></input>
          </label>
          <label>
            Number
            <input
              type="text"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
