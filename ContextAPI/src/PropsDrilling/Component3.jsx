
export default function Component3({name}) {
  return (
    <div>
      <h1>{name}</h1>
     
    </div>

  )
}

Component3.propTypes={
    name:String.isrequired,
}


