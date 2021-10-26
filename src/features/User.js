import React from "react";
import './User.css';
import { changeCheck, incrementCount, decrementCount } from "./userSlice";
import { useDispatch } from "react-redux";


export default function User ({user, index}) {
    
    const dispatch = useDispatch();
   
    
    const onCheckBoxChange = () => {
        const inputElement = document.getElementById(index);
        dispatch(changeCheck(inputElement.id));
        if(inputElement.checked) {
            dispatch(incrementCount());
        } else {
            dispatch(decrementCount());
        }
       
    }

    const onUserMouseEnter = () => {
        const hoverElement = document.getElementsByClassName('user')[index];
        hoverElement.style.backgroundColor = "rgba(57,98,141,0.05)";
        hoverElement.style.cursor = "pointer";
    }

    const onUserMouseLeave = () => {
        const hoverElement = document.getElementsByClassName('user')[index];
        hoverElement.style.backgroundColor = "#fff";
        hoverElement.style.cursor = "default";
    }
       


    return (
        <div className="user" onMouseEnter={onUserMouseEnter} onMouseLeave={onUserMouseLeave}>
           <label className="checkBoxContainer">
                <input type="checkbox" id={index} onChange={onCheckBoxChange}/>
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