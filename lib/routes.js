import React from 'react';
import { render } from 'react-dom';
import Home from '/imports/ui/home/Home.jsx';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        render(<Home/>, document.getElementById('app'));
    },
    name: "home"
});

FlowRouter.route('/lists/:id', {
    action: function(params, queryParams) {
        render(<Home/>, document.getElementById('app'));
    },
    name: "home"
});

FlowRouter.route('/seiyuu/:id', {
    action: function(params, queryParams) {
        render(<Home/>, document.getElementById('app'));
    },
    name: "home"
});

FlowRouter.route('/birthday', {
    action: function(params, queryParams) {
        render(<Home/>, document.getElementById('app'));
    },
    name: "home"
});

FlowRouter.route('/birthday/seiyuu/:id', {
    action: function(params, queryParams) {
        render(<Home/>, document.getElementById('app'));
    },
    name: "home"
});

FlowRouter.route('/birthday/group/:slug', {
    action: function(params, queryParams) {
        render(<Home/>, document.getElementById('app'));
    },
    name: "home"
});