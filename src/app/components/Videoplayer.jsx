import React from 'react'

const Videoplayer = () => {
    return (
        <div>
            <video controls width="640" height="360">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Videoplayer