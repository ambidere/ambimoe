import React from 'react';
import { render } from 'react-dom';
import Home from '/imports/ui/home/Home.jsx';
import MainLayout from '/imports/ui/layout/MainLayout.jsx'

FlowRouter.route('/', {
    action: function(params, queryParams) {
        mountLayout(<Home/>, 'app');
    },
    name: "home"
});

function mountLayout(content, rootId) {
    render(<MainLayout 
            content={content}/>, document.getElementById(rootId));
}