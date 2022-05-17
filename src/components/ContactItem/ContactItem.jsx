import propTypes from 'prop-types';
import { Span, BtnDelete } from '../ContactItem/ContactItem.styled';
export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <Span>{name} </Span> : <Span> {number}</Span>
      <Span>
        <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </BtnDelete>
      </Span>
    </>
  );
};
ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};
