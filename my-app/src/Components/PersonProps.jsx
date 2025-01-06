/* eslint-disable react/prop-types */

// export default function PersonProps(props) {
//   return (
//     <div>
//       <h1>React Props</h1>
//       <h2>Name : {props.name}</h2>
//       <p>Age : {props.age}</p>
//     </div>
//   )
// }


//destructuring 
export default function PersonProps({name,age}) {
  return (
    <div>
      <h1>React Destructring props</h1>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  )
}

