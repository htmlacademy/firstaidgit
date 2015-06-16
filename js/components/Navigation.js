import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

let Navigation = React.createClass({
    render() {
        return (
            <section className="row">
                <ul className="main-navigation column-12">
                    <li className="main-navigation__item">
                        <Link to="home">Главная</Link>
                    </li>
                    <li className="main-navigation__item">
                        <Link to="about">О проекте</Link>
                    </li>
                </ul>
            </section>
        );
    }
});

export default Navigation;
