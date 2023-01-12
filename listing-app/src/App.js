import TopBar from "./components/top bar/TopBar";
import CreateListing from "./Pages/create-listing/CreateListing";
import Home from "./Pages/hompages/home";
import Detail from "./Pages/listingdetail/Detail";
import MenuNav from "./Pages/menu-nav/MenuNav";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/MenuNav" element={<MenuNav/>}/>
        </Routes>
      <div>
        <TopBar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/detail" element={<Detail/>}/>
        <Route exact path="/create" element={<CreateListing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
