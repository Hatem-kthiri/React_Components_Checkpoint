import React from 'react'
import image from "./image.jpg"

function ProfilePhoto() {
    return (
        <div className="Photo"> 
            <img src={image} alt="profile_image" />
        </div>
    )
}

export default ProfilePhoto
