// eslint-disable-next-line no-unused-vars
import React from 'react'

function JSXExpressions() {
    const title="JSX Expressions";
    const date=new Date();
  return (
    <div>
      <h1>{title}</h1>
      <p>2 + 2 = {2+2}</p>
      <p>Today&apos;s Date : {date.getDate()}</p>
    </div>
  )
}

export default JSXExpressions
