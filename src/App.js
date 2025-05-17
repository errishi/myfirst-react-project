import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Rishikesh Singh";
  let arr = [10, 20, 30, 40];
  let obj = {
    'name': "Rishi",
    'cName': "MERN",
    'desc': "React Js"
  }
  return (
    <div className="App">
      <h1>Welcome to My react project</h1>
      <h1>{name}</h1>
      {arr.map((element)=>{
        return(
          <div>{element}</div>
        )
      })}

      <div>
        {obj.cName}
      </div>

      <div>{10+20}</div>

    </div>
  );
}

export default App;
