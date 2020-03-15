import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/sidePanel.scss';

class SidePanel extends React.Component {

    render(){

        return (
                <div class="sidebar">
                    <div class="title">Admin Page</div>
                    <ul class="nav">
                        <li>
                            <NavLink className = { this.props.item==='Dashboard'? 'active' : ''} to='/dashboard'>Dashboard</NavLink>
                        </li> 
                        <li>
                            <NavLink className = { this.props.item==='Statistics'? 'active' : ''} to='/stats'>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink className = { this.props.item==='ChangePassword'? 'active' : ''} to='/changePwd'>Change Password</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Logout</NavLink>
                        </li>
                    </ul>
                </div>       
        );
    }
}

export default SidePanel;