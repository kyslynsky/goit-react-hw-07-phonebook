import { Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/phonebook/contactsSlice';
import { Container } from 'components/GlobalStyles';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';

const PhonebookPage = () => {
  const { data: contacts = [], isError, isFetching } = useGetContactsQuery();
  const filterValue = useSelector(state => state.filter.value);

  const filteredContacts = useMemo(() => {
    return contacts?.filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ?? []
    );
  }, [filterValue, contacts]);

  return (
    <Container>
      <ContactForm />
      {isFetching && <Loader />}
      {contacts.length > 0 && (
        <>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      )}
      {isError && <div>Something went wrong...</div>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default PhonebookPage;
