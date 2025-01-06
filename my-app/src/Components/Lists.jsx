export default function Lists() {
  const lst=[1,2,3,4,5];

//   const items = [];

//   if (!items || items.length === 0) {
//     return <p>No items Availaible.</p>;
//   }

    const users = [
      { id: 1, name: "Jhon", age: 24 },
      { id: 2, name: "Alex", age: 25 },
      { id: 3, name: "HArry", age: 37 },
    ];
  return (
    <div>
      <h1>Rendering List : </h1>
      {<ul>
        {lst.map((item,index)=>(
            <li key={index}>{item}</li>)
        )}
      </ul>}
      {
        //by destructuring Arrays
        users.map(({ id, name, age }) => (
          <ul key={Math.random()}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{age}</li>
          </ul>
        ))
      }

      {users.map((user) => (
        <ul key={user.id}>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.age}</li>
        </ul>
      ))}


     {/* <h1>Rendering List : </h1>
      {items.map((item,index) => (
        <ul key={index}>
          <li>{item}</li>
        </ul>
      ))} */}
    </div>
  );
}
