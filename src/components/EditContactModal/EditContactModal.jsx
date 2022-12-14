import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetContactByIdQuery,
  useUpdateContactMutation,
} from 'redux/phonebook/contactsSlice';
import { EditContactForm } from 'components/EditContactForm';
import * as S from './EditContactModal.styled';

const EditContactModal = () => {
  const navigate = useNavigate();
  const { contactId } = useParams();
  const { data: contact } = useGetContactByIdQuery(contactId);
  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const closeModal = () => navigate('/phonebook');

  const hanldeUpdateContact = async inputs => {
    try {
      await updateContact({ id: contactId, ...inputs });
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleEscPress = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  });

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <S.Overlay onClick={handleBackdropClick}>
      <S.Modal>
        <S.CloseBtn type="button" onClick={closeModal}>
          <S.CloseIco />
        </S.CloseBtn>
        {contact && (
          <EditContactForm
            initValues={{ name: contact.name, phone: contact.phone }}
            text={'Save'}
            onSubmit={hanldeUpdateContact}
            disable={isLoading}
          />
        )}
      </S.Modal>
    </S.Overlay>
  );
};

export default EditContactModal;
