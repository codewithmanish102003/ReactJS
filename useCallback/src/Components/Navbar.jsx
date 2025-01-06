import propTypes from 'prop-types'
import { memo } from 'react'

function Navbar({prop,setProp}) {
    alert("NavBar Rendered.....")
  return (
    <div>
      I am a Navbar With {prop} Behavior
      <button onClick={()=>{setProp()}}>Change ME</button>
    </div>
  )
}

Navbar.propTypes={
    prop:propTypes.string.isRequired,
    setProp:propTypes.string.isRequired,
}
export default memo(Navbar)
