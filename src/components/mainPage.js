import React from 'react';
import '../style/mainPage.scss';
import SidePanel from './sidePanel';
import Graph4 from './graph4';
import Graph2 from './graph2';
import { connect } from 'react-redux';

class MainPage extends React.Component {

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
                <SidePanel item='Dashboard'/>
                <div class= {this.state.navState ? "content content-is-open" : "content"}>
                    <span class='side-panel-toggle' onClick={this.handleClick}>
                        <i class="fa fa-bars"></i>
                    </span>
                    <div className="data">
                        <h1>DashBoard</h1>
                        <p>DashBoard data</p>
                        <Graph4 data={this.props.graph1} heading="Visitor Count (Last 5 Years)"/>
                        <hr />
                        <Graph4 data={this.props.graph2} heading="Visitor Count (Last 12 months)"/>
                        <hr />
                        <Graph4 data={this.props.graph3} heading="Visitor Count (Last 28 days)"/>
                        <hr />
                        <Graph2 data={this.props.graph4}/>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        graph1: state.yearlyVisitorCount,
        graph2: state.monthlyVisitorCount,
        graph3: state.dailyVisitorCount,
        graph4: state.categoryWishCount
    }
  }

export default connect(mapStateToProps)(MainPage);

{/* <div class="wrapper">
<SidePanel item='Dashboard'/>
<div class= {this.state.navState ? "content content-is-open" : "content"}>
    <span class='side-panel-toggle' onClick={this.handleClick}>
        <i class="fa fa-bars"></i>
    </span>
    <div className="data">
        
    </div>
    <hr />
</div>
</div> */}