import React from 'react'
import './User.css'

export const User = ({color,el}) => {
    return (
    <div className="user-card">
              <img className="img"  src={el.img} alt="" />
            <div className="avatar" style={color && {background: color}} ></div>
            <b className="name">{el.name}</b>
            <b className="age">years:{el.age}</b>
            <b className="count">{el.country}</b>

        </div>
    )
}


