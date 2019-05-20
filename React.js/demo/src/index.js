import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {browserHistory, Route, Router} from 'react-router';
import Main from '../src/components/Routes/Main';
import Register from '../src/components/Routes/Register';
import Store1 from './components/Routes/Stores/Store1';
import Store2 from './components/Routes/Stores/Store2';
import Store3 from './components/Routes/Stores/Store3';

class AnotherPage extends Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={Main}/>
                <Route path="register" component={Register}/>
                <Route path="store-page=1" component={Store1}/>
                <Route path="store-page=2" component={Store2}/>
                <Route path="store-page=3" component={Store3}/>
            </Router>
        );
    }
}

ReactDOM.render(<AnotherPage/>, document.getElementById('root'));
