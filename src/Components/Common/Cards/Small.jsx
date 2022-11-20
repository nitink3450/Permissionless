import React from 'react'
import './Cards.css';
const Small = ({src:{src,category,tag}}) => {
    return (
        <div className='smallCard' style={{ backgroundImage: `url(${src})` }}>
            <h2 className='smallHead'>{tag}</h2>
        </div>
    )
}

export default Small;