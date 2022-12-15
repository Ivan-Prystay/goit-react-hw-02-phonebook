import { Component } from 'react';

import { ListContact, ContactItem } from './ContactList.styled';

export class ContactList extends Component {
  constructor(props) {
    super(props);
    console.log('props ContactList', props);
  }
  render() {
    return (
      <ListContact>
        {this.props.contacts.map(({ name, id, number }) => (
          <ContactItem key={id}>
            {name}
            {': '}
            {number}
          </ContactItem>
        ))}
      </ListContact>
    );
  }
}
