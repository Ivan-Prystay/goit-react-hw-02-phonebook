import { Component } from 'react';

import { Contact } from 'components/Contact/Contact';
import { ListContact } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { filterContact, contacts, deleteContact } = this.props;

    let arr = filterContact;
    if (!filterContact) {
      arr = contacts;
    }

    return (
      <ListContact>
        {arr.map(item => (
          <Contact key={item.id} contact={item} deleteContact={deleteContact} />
        ))}
      </ListContact>
    );
  }
}
