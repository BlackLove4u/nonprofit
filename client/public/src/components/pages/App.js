import React from 'react';  
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  
import Home from './pages/Home';  
import Blog from './pages/Blog';  
import Podcast from './pages/Podcast';  
import Store from './pages/Store';  

function App() {  
    return (  
        <Router>  
            <Switch>  
                <Route path="/" exact component={Home} />  
                <Route path="/blog" component={Blog} />  
                <Route path="/podcast" component={Podcast} />  
                <Route path="/store" component={Store} />  
            </Switch>  
        </Router>  
    );  
}  

export default App;  