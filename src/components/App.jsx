import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: `id-${nanoid(2)}`,
      name,
      number,
    };

    if (
      this.state.contacts.find(
        option => option.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`A contact with the name ${contact.name} already exists.`);
      this.reset();
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
    this.reset();
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  reset = () => {
    this.setState({ name: '', number: '', filter: '' });
  };

  render() {
    return (
      <div
        style={{
          paddingLeft: '24px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          name={this.state.name}
          number={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          filterContact={this.filterContact()}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
