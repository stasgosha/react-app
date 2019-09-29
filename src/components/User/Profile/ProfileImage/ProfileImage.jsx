import React from 'react';
import s from './ProfileImage.module.scss';

const ProfileImage = ({src, ...props}) => {
    let imageStyles = {
        backgroundImage: `url(${src})`
    }

    return (
        <div className={s.ProfileImage} style={imageStyles} />
    )
}

export default ProfileImage;