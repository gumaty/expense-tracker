import "./ExpenseForm.css";
import {useState} from "react";
function ExpenseForm(props) {

    // separate useStates

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // useState in one object

    // const [userInput, setUserInput] =useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) => {

        // useState in one object - prevState version

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })


        // useState in one object - without prevState version

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // separate useStates

        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {

        // useState in one object - prevState version

        // setUserInput((prevState) => {
        //     return {
        //     ...prevState,
        //     enteredAmount: event.target.value
        //     }
        // })

        // useState in one object - without prevState version

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // separate useStates

        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {

        // useState in one object - prevState version

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })

        // useState in one object - without prevState version

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // separate useStates

        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveNewExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;