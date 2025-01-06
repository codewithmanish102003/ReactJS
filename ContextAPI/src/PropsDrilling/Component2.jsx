import Component3 from "./Component3"
export default function Component2({name}) {
  return (
    <div>
      <Component3 name={name}/>
    </div>
  )
}
Component2.propTypes={
    name:String.isrequired,
}