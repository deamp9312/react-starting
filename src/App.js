import ExpenseItem from "./components/ExpenseItem";
//사용자 지정 컴포넌트는 대문자로 시작되는것을 규칙으로 함.
function App() {
  //명령적 접근법
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para);
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

//JSX란
/** html = xml
 * JavaScript XML
 */

export default App;
