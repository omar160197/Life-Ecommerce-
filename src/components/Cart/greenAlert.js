import React from 'react'

function GreenAlert(props) {
  return (
    <>
        <div className = {`alert alert-success w-100 ${props.display}`} role="alert">
                {props.message}
            </div>
    </>
  )
}

export default GreenAlert