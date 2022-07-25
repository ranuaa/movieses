
import './App.css'
import { BrowserRouter } from "react-router-dom";
import NavBar from "./componennts/NavBar";
import Pages from './pages/Pages'


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar />
    <Pages />
    </BrowserRouter>
    </div>
  );
}

export default App;