import {ApolloClient,InMemoryCache, ApolloProvider} from '@apollo/client';


const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
});

function App() {
  return (
   <>
  <ApolloProvider client={client}>
   <div className="d-flex justify-content-center align-items-center min-vh-100">
    <header>
      <h1>Project Management Platform</h1>
    </header>
   </div>
   </ApolloProvider>
   </>
  );
}

export default App;
