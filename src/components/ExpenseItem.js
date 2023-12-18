//리액트의 컴포넌트는 단지 자바스크립트의 함수에 불가함.
//반환되는게 JSX라는게 특이하지만 js fn이라는게 핵심.

//반환되는 값은 루트요소가 오직 하나만 
//반환되어야 됨(아래 외부의 div 테그가 없으면 문제발생함)
import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023,11,18);
    const expenseTitle = "Car Insurance";
    const expenseAmout = 294.12;
  return (
    <div className="expense-item">
      <div>March 28th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.12</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
