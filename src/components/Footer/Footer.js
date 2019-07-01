import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <li><NavLink  exact to="/" activeClassName="abc"><font className="fa fa-sticky-note-o"></font>专题</NavLink></li>
                <li><NavLink  exact to="/design" activeClassName="abc"><font className="fa fa-mars"></font>设计师</NavLink></li>
                <li><NavLink  exact to="/stroll" activeClassName="abc"><font className="fa fa-heart-o"></font>逛</NavLink></li>
                <li><NavLink  exact to="/mine" activeClassName="abc"><font className="fa fa-user-o"></font>我的</NavLink></li>
            </div>
        )
    }
}
