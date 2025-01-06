/* eslint-disable react/prop-types */

export default function Greet({time}) {
    const say="morning"
  return (
    <div>
      <h1>Using Ternery Operator for Conditonal rendering</h1>
        {time == say ?<h3>Good Morning</h3>:<h3>Good Afternoon</h3>}
        <h1>Using && Operator</h1>
        {time == say && <h3>Good Morning</h3>}
    </div>
  )
}
