import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, MainTitle, SecondTitle } from 'components/App/App.styled'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContact = (data) => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid()
    };    

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    };

    this.setState((prevState) => {
      return {contacts: [...prevState.contacts, newContact]}
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  handleChangeInFilter = (e) => {
    this.setState({filter: e.target.value})
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  render() {
    const { filter } = this.state;
    return (
      <Container>        
          <MainTitle>Phonebook</MainTitle>         
          <ContactForm onAddContact={this.addContact} />        
          <SecondTitle>Contacts</SecondTitle>
          <Filter value={filter} onChange={this.handleChangeInFilter}/>
          <ContactList contacts={this.getFilteredContacts()} onDeleteContact={this.deleteContact} />        
      </Container>
    );
  };
};

export default App;