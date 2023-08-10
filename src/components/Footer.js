import React from 'react'

function Footer(props) {
  return (
    <>
    <div style={{position:'fixed',bottom: 0, textAlign:'center', width:'100%', backgroundColor: props.mode==='dark'?'#353B43':'#78C5FF' , padding:'5px 5px', color: props.mode==='dark'?'#D5D5D5':'black'}}>
        <h5><b>Made by- TSA</b></h5>
    </div>
    </>
  )
}

export default Footer
