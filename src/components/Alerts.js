import React from 'react'

function Alerts(props) {
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show` } role="alert" style={{textAlign:'center', position:'absolute', width:"500px" , left:'33%' ,top:'-35px' , margin:'auto'}}>
        <strong>{props.alert.msg}</strong>
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
    </div>
  )
}

export default Alerts
