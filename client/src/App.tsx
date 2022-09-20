import { FC } from "react";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Rides from "./pages/Rides";
import ML from "./pages/ML";
import CarData from "./pages/CarData";
import Login from "./pages/Login";


import "./App.css";
import MapDemo from "./Components/MapDemo/MapDemo";



const App: FC = () => {

    const position = L.marker([55.7856,12.5214]);

    return (
        <div className="App">
            {/* <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/cardata" component={() => <CarData />} />
                    <Route exact path="/rides" component={() => <Rides />} />
                    <Route exact path="/ml"    component={() => <ML />} />
                    <Route exact path="/login" component={() => <Login />} />
                </Switch>
            </Router> */}
            <MapDemo position={position.getLatLng()} />
        </div>
    );
}

export default App;