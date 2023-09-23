import React from 'react'
import B from './B'

export default function A(props) {

    console.log("Hello");
  return (
   
    <React.Fragment> 
    <div>A component</div>
    <B></B>
    </React.Fragment>
  )

}
