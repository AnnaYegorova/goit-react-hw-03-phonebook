import propTypes from 'prop-types';
import { ContactUl, ContactListItem } from '../ContactList/ContactList.styled';
import { ContactItem } from '../ContactItem/ContactItem';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </ContactListItem>
        );
      })}
    </ContactUl>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};
