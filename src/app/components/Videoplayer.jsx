'use client'

import React from 'react'

const Videoplayer = () => {
    return (
        <div>
            <video autoPlay width="640" height="360">
                <source src="/jsvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Videoplayer