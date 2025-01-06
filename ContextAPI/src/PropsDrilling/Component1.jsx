import Component2 from "./Component2"
import Component4 from "../UsingContextAPI/Component4"

function Component1({name}) {

  return (
    <div>
    <Component2 name={name}/>
    <Component4 name={name}/>
    </div>
  )
}

Component1.propTypes={
    name:String.isrequired,
}

export default Component1
