import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

import NavBar from './components/Navbar';

import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:roomDetail" component={SingleRoom}/>
      <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;