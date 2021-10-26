import User from './User';
import { selectUsers } from './usersFetch';
import {useSelector, useDispatch} from "react-redux";
import './Table.css';
import { changeCheck, decrementCount, incrementCount, selectChecked } from './userSlice';

export function Table() {

    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    const checked = useSelector(selectChecked);

    const handleCheckAll = () => {
        const checkBoxElement = document.getElementById('checkAll');
        if(checkBoxElement.checked) {
            for(let i=0; i<users.length; i++) {
                if(!checked[i]) {
                    console.log(!checked[i]);
                    dispatch(changeCheck(i));
                    dispatch(incrementCount());
                }
                document.getElementById(i).setAttribute("checked", "checked");
            }
        } else {
            for(let i=0; i<users.length; i++) {
                if(checked[i]) {
                    console.log(checked[i]);
                    dispatch(changeCheck(i));
                    dispatch(decrementCount());
                }
                document.getElementById(i).removeAttribute("checked");
            }
        }
    }

    return (
        <div className="tableContainer">
            <div className="tableHeader">
                <label className="checkBoxContainer">
                    <input type="checkbox" id="checkAll" onChange={handleCheckAll}/>
                    <span className="checkMark"></span>
                </label>
                <div>TYPE</div>
                <div>NAME</div>
                <div>EMAIL</div>
                <div>TELEPHONE</div>
                <div>STATUS</div>
            </div>
            <div className="tableRows">
                {users.map((user, index) => ( <User user={user} key={index} index={index}/> ))}
            </div>
        </div>
    );

}