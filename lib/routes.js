import React from 'react';
import { render } from 'react-dom';
import Home from '/imports/ui/home/Home.jsx';
import Birthday from '/imports/ui/birthday/Birthday.jsx';

import MainLayout from '/imports/ui/layout/MainLayout.jsx'

FlowRouter.route('/', {
    action: function(params, queryParams) {
        mountLayout(<Home/>, 'app');
    },
    name: "home"
});

FlowRouter.route('/birthday', {
    action: function(params, queryParams) {
        mountLayout(<Birthday/>, 'app');
    },
    name: "birthday"
});

function mountLayout(content, rootId) {
    render(<MainLayout 
            content={content}/>, document.getElementById(rootId));
}