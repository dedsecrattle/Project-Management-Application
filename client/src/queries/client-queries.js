import { gql } from '@apollo/client';

const GET_CLIENTS = gql`{
  query: clients{
    id
    name 
    email
  }
}
`;

export { GET_CLIENTS };