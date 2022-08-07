import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/** Linkの設定 */}
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
