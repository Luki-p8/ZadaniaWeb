import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const [isGenerated, setIsGenerated] = useState(true);
  const [www, setWww] = useState("");
  const [login, setLogin] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setWww(formData.get("inputWWW"));
    setLogin(formData.get("inputLogin"));
  }

  return (
    <>
      <section>
        <h1></h1>
        <form method="get" onSubmit={handleSubmit}>
          <label htmlFor="inputWWW" className="form-label display-block">
            Adres WWW:
          </label>
          <input
            type="text"
            name="inputWWW"
            className="form-control"
            id="inputWWW"
          />
          <label htmlFor="inputLogin" className="form-label">
            Login:
          </label>
          <input
            type="text"
            name="inputLogin"
            className="form-control"
            id="inputLogin"
          />
          <input
            type="checkbox"
            defaultChecked="true"
            onChange={() => setIsGenerated(!isGenerated)}
            name="checkGeneratePassword"
            className="form-check-input"
            id="checkGeneratePassword"
          />
          <label htmlFor="checkGeneratePassword" className="form-label">
            Wygeneruj hasło
          </label>
          <br />
          <label htmlFor="inputPassword" className="form-label">
            Hasło:
          </label>
          <input
            type="password"
            name="inputPassword"
            disabled={isGenerated}
            className="form-control"
            id="inputPassword"
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Zapisz" />
        </form>
      </section>
      <section>
        <p className="p-2 text-primary">Adres:{www}</p>
        <p className="p-2">Login:{login}</p>
        <p className="p-2">
          {isGenerated ? "Hasło automatycznie generowane" : "Hasło:"}
        </p>
      </section>
    </>
  );
}

export default App;
