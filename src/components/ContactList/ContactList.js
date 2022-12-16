import { Component } from 'react';

import { Contact } from 'components/Contact/Contact';
import { ListContact } from './ContactList.styled';

export class ContactList extends Component {
  constructor(props) {
    super(props);
    console.log('props ContactList', props);
  }
  render() {
    return (
      <ListContact>
        {!this.props.filterContact
          ? this.props.contacts.map(item => (
              <Contact
                contact={item}
                deleteContact={this.props.deleteContact}
              />
            ))
          : this.props.filterContact.map(item => (
              <Contact
                contact={item}
                deleteContact={this.props.deleteContact}
              />
            ))}
      </ListContact>
    );
  }
}
