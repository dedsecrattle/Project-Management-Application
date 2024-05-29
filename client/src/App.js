import {useQuery} from '@apollo/client';
import { GET_CLIENTS } from './queries/client-queries.js'
import ClientRow from './components/ClientRow.jsx';

function App() {

  const {loading, error, data } = useQuery(GET_CLIENTS);

  console.log(data)

  if (loading) return <p>Still Loading!</p>;
  if (error) return <p>{error.message}</p>;
  return (
   <>
   <div className="d-flex justify-content-center align-items-center min-vh-100">
    <header>
      <h1>Project Management Platform</h1>
    </header>
    {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.query.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
   </div>
   </>
  );
}

export default App;
