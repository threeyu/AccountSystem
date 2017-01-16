import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';
import HomePage from './routes/HomePage/HomePage';
import IndexPage from './routes/IndexPage/IndexPage';
import Orders from './routes/Orders/Orders';
import Storage from './routes/Storage/Storage';
import Stock from './routes/Stock/Stock';
import Funds from './routes/Funds/Funds';
import Manage from './routes/Manage/Manage';

export default function ({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={HomePage}>
                <IndexRoute component={IndexPage}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/storage" component={Storage}/>
                <Route path="/stock" component={Stock}/>
                <Route path="/funds" component={Funds}/>
                <Route path="/manage" component={Manage}/>
            </Route>
        </Router>
    );
};