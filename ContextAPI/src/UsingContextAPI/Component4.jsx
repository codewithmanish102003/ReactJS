import { Data } from "../App"

export default function Component4({name}) {
  return (
    <div>
       <Data.Consumer>
        {
        ()=>{
          return <h1>{name}</h1>
        }
        }
      </Data.Consumer>
    </div>
  )
}
Component4.propTypes={
    name:String.isrequired,
}
