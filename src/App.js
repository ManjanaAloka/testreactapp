import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const Navigate = useNavigate();

  return (
    <div className="App" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #e0eafc, #cfdef3)" }}>
      <header className="App-header" style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ color: "white", marginBottom: "2rem" }}>Welcome to SOFLO.lk</h1>
        <button className="user-button" onClick={()=>Navigate('/users')}>Users</button>
      </header>
    </div>
  );
}

export default App;
