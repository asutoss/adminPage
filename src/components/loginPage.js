import React from 'react';
import { connect } from 'react-redux';
import '../style/loginPage.scss';

class LoginPage extends React.Component {
    
    state={
        userName: '',
        passWord: '',
        account : {
            userName: this.props.userName,
            passWord: this.props.passWord
        }
    }
    
    setUserName = (e) => {
        const x = e.target.value;
        const temp = this.state;
        this.setState({
            ...temp,
            userName : x
        });
    }

    setPassWord = (e) => {
        const x = e.target.value;
        const temp = this.state;
        this.setState({
            ...temp,
            passWord : x
        });
    }

    handleLogin = () => {
        console.log(this.state);
        if(this.state.userName !== this.state.account.userName || this.state.passWord !== this.state.account.passWord){
            console.log('userName and password does not match');
            this.props.history.push('/');
        }
        else {
            this.props.history.push('/dashboard');
        }

    }

    render(){

        return(
            <div className="tile">
                <div className="tile-header">
                <h2 
                style= {{   color: "white",
                            opacity: ".75", 
                            fontSize: "4rem" ,
                            display: "flex" ,
                            justifyContent: "center" ,
                            alignItems: "center",
                            height: "100%",
                            marginTop: "0px"
                        }}
                >SIGN IN</h2>
                </div>
            
                <div className="tile-body">
                    <form id="form" onSubmit={this.handleLogin}>
                        <label className="form-input">
                            <i className="material-icons">person</i>
                            <input type="text" onChange={this.setUserName} autoFocus={true} required />
                            <span className="label">Username</span>
                            <span className="underline"></span>
                        </label>
                
                        <label className="form-input">
                            <i className="material-icons">lock</i>
                            <input type="password" onChange={this.setPassWord} required />
                            <span className="label">Password</span>
                            <div className="underline"></div>
                        </label>
                    
                        <div className="submit-container clearfix" 
                        style={{marginTop : "2rem "}}
                        >          
                            <button id="submit" className="btn btn-irenic float-right" tabIndex="0">
                                <span>SIGN IN</span>
                            </button>
                        
                            <div className="login-pending">
                                <div className="spinner">
                                    <span className="dot1"></span>
                                    <span className="dot2"></span>
                                </div>
                        
                                <div className="login-granted-content">
                                    <i className="material-icons">done</i>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.account.userName,
        passWord: state.account.passWord
    }
  }

export default connect(mapStateToProps)(LoginPage);