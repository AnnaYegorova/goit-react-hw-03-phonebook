import { Title, Container, SubTitle } from '../components/App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { ContactForm } from '../components/ContactForm';
const LS_KEY = 'current_list_contacts';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  componentDidMount() {
    const listContacts = localStorage.getItem(LS_KEY);

    if (listContacts !== null) {
      this.setState({ contacts: JSON.parse(listContacts) });
    }
  }
  componentDidUpdate(_, prevState) {
    // console.log('LIST UPDATE', this.state.contacts);
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(8),
      name,
      number,
    };
    contacts.some(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />

        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
