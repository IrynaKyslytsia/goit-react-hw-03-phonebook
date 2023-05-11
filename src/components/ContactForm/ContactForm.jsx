import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormBtn } from 'components/ContactForm/ContactForm.styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    };

    handleSabmit = (e) => {
        e.preventDefault();

        this.props.onAddContact(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };

    render() {
        return (
            <Form onSubmit={this.handleSabmit}>
            <FormLabel htmlFor={nanoid()}>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           
            <FormLabel htmlFor={nanoid()}>Number</FormLabel>
            <FormInput
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            
            <FormBtn type='submit'>Add contact</FormBtn>
          </Form>
        )
    }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};