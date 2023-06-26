import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";
function ExpenseItem(props) {

    const {expense} = props;

    const [title, setParams] = useState(expense.title);

    const clickHandler = () => {
        setParams("Clicked!!!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={expense.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${expense.amount}</div>
                <button onClick={clickHandler}>Change title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;