import {gql} from 'apollo-angular';

// Query to get all customers
export const GET_CUSTOMERS = gql`
  query GetCustomers {
    customersList {
      id
      firstName
      lastName
      email
      phoneNumber
      address
    }
  }
`;

// Query to get customer by ID
export const GET_CUSTOMER_BY_ID = gql`
  query GetCustomerById($id: ID!) {
    customerById(id: $id) {
      id
      firstName
      lastName
      email
      phoneNumber
      address
    }
  }
`;

// Mutation to create a customer
export const CREATE_CUSTOMER = gql`
  mutation CreateCustomer($customer: CustomerDTO!) {
    createCustomer(customer: $customer) {
      firstName
      lastName
      email
      phoneNumber
      address
    }
  }
`;

// Mutation to update a customer
export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($id: ID!, $customer: CustomerDTO!) {
    updateCustomer(id: $id, customer: $customer) {
      firstName
      lastName
      email
      phoneNumber
      address
    }
  }
`;

// Mutation to delete a customer
export const DELETE_CUSTOMER = gql`
  mutation DeleteCustomer($id: ID!) {
    deleteCustomer(id: $id)
  }
`;
