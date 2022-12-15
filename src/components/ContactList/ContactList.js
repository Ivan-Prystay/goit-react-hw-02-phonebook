import { Component } from 'react';

import { ListContact, ContactItem } from './ContactList.styled';

export class ContactList extends Component {
  constructor(props) {
    super(props);
    console.log();
  }
  render() {
    return (
      <ListContact>
        {!this.props.filterContact
          ? this.props.contacts.map(({ name, id, number }) => (
              <ContactItem key={id}>
                {name}
                {': '}
                {number}
                <button type="button">Delete contact</button>
              </ContactItem>
            ))
          : this.props.filterContact.map(({ name, id, number }) => (
              <ContactItem key={id}>
                {name}
                {': '}
                {number}
                <button type="button">Delete contact</button>
              </ContactItem>
            ))}
      </ListContact>
    );
  }
}
