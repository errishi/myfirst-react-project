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
  let status = true;
  return (
    <div className="main">
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

      {  (status) ? 
        <h1 style={{color : "red"}}>Welcome to React Js</h1>
        :
        ""
      }

    </div>
  );
}

export default App;
