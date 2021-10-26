import React from "react";
import './User.css';

export default function User ({user}) {

    return (
        <div key={user.id} className="user">
           <label className="checkBoxContainer">
                <input type="checkbox" id={"checkBox" + user.id.slice(-1)}/>
                <span className="checkMark"></span>
            </label>
            <div className="userType">
                
                {user.type.substring(0,2).toUpperCase()}
            </div>
            <div className="userName">{user.name}</div>
            <div className="userEmail">{user.email}</div>
            <div className="userTelephone">{user.phone}</div>
            <label className="switch">
                <input type="checkBox" checked={user.active} disabled="disabled"/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}