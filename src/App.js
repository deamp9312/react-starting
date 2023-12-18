import ExpenseItem from "./components/ExpenseItem";
//사용자 지정 컴포넌트는 대문자로 시작되는것을 규칙으로 함.
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper1",
      amount: 123.111,
      date: new Date(2023, 11, 11),
    },
    {
      id: "e2",
      title: "Toilet Paper2",
      amount: 123.222,
      date: new Date(2023, 11, 12),
    },
  ];
  //명령적 접근법
  const para = document.createElement("p");
  para.textContent = "This is also visible";
  document.getElementById("root").append(para);
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

//JSX란
/** html = xml
 * JavaScript XML
 */

export default App;
