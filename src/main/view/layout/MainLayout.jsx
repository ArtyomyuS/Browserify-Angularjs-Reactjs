'use strict';

var React = require('react');
var Angular = require('Angular');

/**
 */
var MainLayout = React.createClass({
    getInitialState: function () {
        return {};
    },
    render: function () {
        return (
            <div className="MainLayout">Hello World</div>
        );
    }
});

Angular.module('app').value('MainLayout', MainLayout);
module.exports = MainLayout;
