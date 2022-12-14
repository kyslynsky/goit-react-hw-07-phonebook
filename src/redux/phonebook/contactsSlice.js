import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62fb5dbfe4bcaf535182e287.mockapi.io/api',

    // baseUrl: 'https://62fe894fa85c52ee48397775.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),
    getContactById: build.query({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),
    updateContact: build.mutation({
      query: fields => ({
        url: `/contacts/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
