import React, { useState } from 'react'
import { calculateNext } from '../utils/rotate'

const RotateComponent = () => {
    const [rotateDeg, setRotateDeg] = useState(-50)

    function forgatJobb(){
        setRotateDeg(calculateNext(rotateDeg, 10, true))
        setRotateDeg(rotateDeg + 10)
    }

  return (
    <div>
        <button onClick={forgatJobb}>
            RIGHT
        </button>

        <button onClick={()=>{ setRotateDeg(rotateDeg - 10) }}>
            LEFT
        </button>

        <div style={{ rotate: rotateDeg + "deg" }}>
            =======
        </div>
    </div>
  )
}

export default RotateComponent