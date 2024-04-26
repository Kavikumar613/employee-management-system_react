import ListEmployeeComponent from "./components/ListEmployeeComponent"
import "./App.css"
import HeaderComponents from "./components/HeaderComponents"
import FooterComponrnts from "./components/FooterComponrnts"
import { Route, BrowserRouter as Router,Routes } from "react-router-dom"



const App = () => {
  return (
    <div>

      <Router>
        <div className='container'>
          <HeaderComponents />
          <div className="container">
            <Routes>
              <Route path="/"  Component={<ListEmployeeComponent/>} />
              <Route path="/employees"  Component={<ListEmployeeComponent/>} />
              <ListEmployeeComponent />
            </Routes>
          </div>
          <FooterComponrnts />
        </div>
      </Router>



      {/* 
        
      </div> */}

    </div>

  );
}

export default App
