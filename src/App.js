import './App.css';

function App() {
  return (
    <div className="App" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #e0eafc, #cfdef3)" }}>
      <header className="App-header" style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ color: "#2d3a4b", marginBottom: "2rem" }}>Welcome to Soflo</h1>
        <form
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            display: "inline-block",
            padding: "2rem 3rem",
            minWidth: "320px"
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: ".5rem", color: "#2d3a4b" }}>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "6px",
                border: "1px solid #bfc9d9",
                outline: "none"
              }}
            />
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: ".5rem", color: "#2d3a4b" }}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: ".75rem",
                borderRadius: "6px",
                border: "1px solid #bfc9d9",
                outline: "none"
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #667eea, #764ba2)",
              color: "#fff",
              padding: ".75rem 2rem",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.2s"
            }}
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
