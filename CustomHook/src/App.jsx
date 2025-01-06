import useFetch from './UseFetch';
import App2 from './App2';


function App() {
  const { data, loading, error } = useFetch('https://api.example.com/data'); // Corrected URL

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <>
      <App2/>
      <div>
        <h1>Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
