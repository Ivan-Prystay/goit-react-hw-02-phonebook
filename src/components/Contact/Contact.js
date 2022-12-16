import { Component } from 'react';
import { ContactItem, DeleteContact } from './Contact.styled';

export class Contact extends Component {
  render() {
    const { id, name, number } = this.props.contact;
    return (
      <ContactItem key={id}>
        {name}
        {': '}
        {number}
        <DeleteContact
          type="button"
          onClick={() => this.props.deleteContact(id)}
        >
          Delete contact
        </DeleteContact>
      </ContactItem>
    );
  }
}