import { Component } from 'react';

import { nanoid } from 'nanoid';
import {
  FormContact,
  AddContact,
  NameInput,
  TelInput,
} from './ContactForm.styled';

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  NameInput = nanoid(3);
  TelInput = nanoid(3);

  render() {
    return (
      <FormContact onSubmit={this.props.handleSubmit}>
        <label htmlFor={this.NameInput}>Name</label>
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.handleChange}
          value={this.props.name}
          id={this.NameInput}
        />
        <label htmlFor={this.TelInput}>Number</label>
        <TelInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.props.handleChange}
          value={this.props.number}
          id={this.TelInput}
        />
        <AddContact type="submit" value="Add contact" />
      </FormContact>
    );
  }
}
