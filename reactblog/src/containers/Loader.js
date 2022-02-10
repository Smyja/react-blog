import React from 'react'
import { SpinnerCircular } from 'spinners-react';

const Loader = () => {
    return (
        <div>
     <SpinnerCircular size={50} thickness={100} speed={100} color="rgba(57, 105, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.57)" />

        </div>
    )
}

export default Loader
