import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Todo">
          <div className="main-head"><span className="Heading">Manage Your Todos</span></div>
          <div className="Add">
            <input type="text" className="Tf" placeholder="Add New todo" id="add"/>
            <button className="Addbutton" >Add</button>
          </div>
          <div className="Alltodos">
            <div className="todolist"><span>Todo List</span></div>
          </div>
          <div className="list">
            <span>There are 4 todos.</span>
            <div className="items">
              <div className="item">
                <span>Buy Milk</span>
                <button className="complete">Complete</button>
              </div>
              <div className="item">
                <span>Shopping</span>
                <button className="complete">Complete</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}


export default App;
