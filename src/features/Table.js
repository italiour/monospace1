import User from './User';
import { selectUsers } from './usersFetch';
import {useSelector } from "react-redux";
import './Table.css';

export function Table() {

    const users = useSelector(selectUsers);

    return (
        <div className="tableContainer">
            <div className="tableHeader">
                <label className="checkBoxContainer">
                    <input type="checkbox" />
                    <span className="checkMark"></span>
                </label>
                <div>TYPE</div>
                <div>NAME</div>
                <div>EMAIL</div>
                <div>TELEPHONE</div>
                <div>STATUS</div>
            </div>
            <div className="tableRows">
                {users.map((user) => ( <User user={user} key={user.id}/> ))}
            </div>
        </div>
    );

}