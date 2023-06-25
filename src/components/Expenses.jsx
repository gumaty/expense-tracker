import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

    return (
        <div className="expenses">
            {props.expenses.map(expense => (<ExpenseItem key={expense.id} expense={expense}/>))}
        </div>
    );
}

export default Expenses;