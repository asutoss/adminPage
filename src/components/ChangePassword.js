import React from 'react';
import SidePanel from './sidePanel';

class ChangePassword extends React.Component { 

    state = {
        navState : 1
    }

    handleClick = () => {
        const temp = this.state;
        this.setState({
            ...temp,
            navState : 1 - temp.navState
        });
    }

    render(){ 
        return(
            <div class="wrapper">
            <SidePanel item='changePassword'/>
            <div class= {this.state.navState ? "content content-is-open" : "content"}>
                <span class='side-panel-toggle' onClick={this.handleClick}>
                    <i class="fa fa-bars"></i>
                </span>
                <div className="data">
                    <h1>Change Password</h1>
                </div>
                <hr />
            </div>
            </div> 
        );
    }
}

export default ChangePassword;