
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Please Register</h3>
      <from>
        <label htmlFor='email'>Email : </label>
        <input type="text" name="email" placeholder="enter your email" />
        <br />
        <br />
        <label htmlFor='password'>Password : </label>
        <input type="password" name="password" placeholder="password"></input>
      </from>
    </div>
  );
}

export default App;
