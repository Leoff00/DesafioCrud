import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import "./globalStyle.scss";
import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
