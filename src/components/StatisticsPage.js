import React from 'react';
import SidePanel from './sidePanel';
import Graph4 from './graph4';
import { connect } from 'react-redux';
import { getMonData } from '../actions/fullData';

// const mons = [
//     'largo of st francis xavier',
//     'church of our lady of the rosary',
//     'mahadev temple',
//     'portal remains of st paul s college',
//     'church of st augustine',
//     'st cajetan church',
//     'se cathedral',
//     'chapora fort',
//     'chapel of st catherine',
//     'basilica of bom jesus',
//     'fort aguada',
//     'arch of viceroy',
//     'adil shah palace'
// ]
 
class StatisticsPage extends React.Component {

    state = {
        navState : 1,
    }

    handleClick = () => {
        const temp = this.state;
        this.setState({
            ...temp,
            navState : 1 - temp.navState
        });
    }

    handleChange = (e) => {
        const temp = this.state;
        this.setState({
            ...temp,
            monState: e.target.value
        })
        this.props.dispatch(getMonData(e.target.value));

	}
    

    render(){ 
        
        console.log(this.props.mon);
        console.log(this.props.graph1);
        console.log(this.props.graph2);
        console.log(this.props.graph3);
        return(
            <div class="wrapper">
                <SidePanel item='Statistics'/>
                <div class= {this.state.navState ? "content content-is-open" : "content"}>
                    <span class='side-panel-toggle' onClick={this.handleClick}>
                        <i class="fa fa-bars"></i>
                    </span>
                    <div className="data">
                        <h1>Statistics</h1>
                        <form>
                            <select 
                                value={this.props.monState}
                                onChange={this.handleChange}
                            >
                                <option value='adil shah palace'>Adil Shah Palace</option>
                                <option value='church of our lady of the rosary'>Church of our lady of the rosary</option>
                                <option value='mahadev temple'>Mahadev Temple</option>
                                <option value='portal remains of st paul s college'>Portal remains of St Paul's college</option>
                                <option value='church of st augustine'>Church of St Augustine</option>
                                <option value='largo of st francis xavier'>Largo of St Francis Xavier</option>
                                <option value='st cajetan church'>St Cajetan Church</option>
                                <option value='se cathedral'>Se Cathedral</option>
                                <option value='chapora fort'>Chapora Fort</option>
                                <option value='chapel of st catherine'>Chapel of St Catherine</option>
                                <option value='basilica of bom jesuse'>Basilica of Bom Jesuse</option>
                                <option value='fort aguada'>Fort Aguada</option>
                                <option value='arch of viceroy'>Arch of Viceroy</option>

                            </select>
                        </form>
                        <p>stats...</p>
                        <Graph4 data={this.props.graph1} heading="Visitor Count (Last 5 Years)"/>
                        <hr />
                        <Graph4 data={this.props.graph2} heading="Visitor Count (Last 12 months)"/>
                        <hr />
                        <Graph4 data={this.props.graph3} heading="Visitor Count (Last 28 days)"/>
                        <hr />
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        mon: state.mon,
        graph1: state.monYearlyVisitorCount,
        graph2: state.monMonthlyVisitorCount,
        graph3: state.monDailyVisitorCount,
    }
}

export default connect(mapStateToProps)(StatisticsPage);