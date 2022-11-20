import React from 'react'
import './Cards.css';
const Big = ({src:{src,category,tag}}) => {
    return (
        <div className='bigCard' style={{ backgroundImage: `url(${src})` }}>
            <h2 className='bigHead'>{tag}</h2>
        </div>
    )
}

export default Big;