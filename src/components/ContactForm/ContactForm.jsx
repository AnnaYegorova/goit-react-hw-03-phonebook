import { Component } from 'react';
import propTypes from 'prop-types';
import {
  Label,
  FormData,
  InputData,
  BtnAdd,
} from '../ContactForm/ContactForm.styled';
export class ContactForm extends Component {
  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  render() {
    return (
      <FormData onSubmit={this.handleSubmit}>
        <Label>
          Name
          <InputData
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Number
          <InputData
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <BtnAdd type="submit">Add contact</BtnAdd>
      </FormData>
    );
  }
}
