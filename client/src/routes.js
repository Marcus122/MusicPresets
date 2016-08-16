import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Index from './components/index';
import EQEdit from './components/eqEdit';
import EQNew from './components/eqNew';
import CompEdit from './components/compEdit';
import CompNew from './components/compNew';


export default(
    <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="equalizer/new" component={EQNew}/>
        <Route path="equalizer/:id" component={EQEdit}/>
        <Route path="compressor/new" component={CompNew}/>
        <Route path="compressor/:id" component={CompEdit}/>
    </Route>
);