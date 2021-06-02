import './free/new.css'

//import List from './Home/list'
import Notifications from './Home/listsone/Notifications'
import Homelist from './Home/listsone/homelist'
import Suggestion from './Home/listsone/suggestion'
import Friend from './Home/listsone/friend'
import Messanger from './Home/listsone/Messanger'
import Profile from './Home/Profile/Profile'



import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  function App() {
    return (
      <div>
        <Router>
        <Switch>
        <Route exact path="/">
              <Profile/>
            </Route>
        <Route exact path="/homelist">
              <Homelist/>
            </Route>
            
        <Route exact path="/Notifications">
              <Notifications/>
            </Route>
        <Route exact path="/suggestion">
        <Suggestion/>
            </Route>
        <Route exact path="/friend">
        <Friend/>
            </Route>
    
          <Route exact path="/Messanger">
        <Messanger/>
        </Route>

</Switch>
       
      </Router>
  
      </div>
    );
  }
  
  export default App;
