import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
// var temp = [];
// this.props.forEach((item) => {
//     temp.push({label: item.year,
//                 y: item.count});
// })
// console.log(temp);

class Graph4 extends React.Component {
    constructor(props){
        super(props);
    }

    state = {
		data: this.props.data,
		graphState: 'column',
		loaded: false
	}

	async componentDidMount() {
		const s = this.state;
		this.setState({...s, loaded: true})
	
		setTimeout(() => {
			const s = this.state;
			this.setState({...s, loaded: true})
		}, 1000);
	
		setTimeout(() => {
			const s = this.state;
			this.setState({...s, loaded: true})
		}, 2000);
	
		setTimeout(() => {
			const s = this.state;
			this.setState({...s, loaded: true})
		}, 4000);
	
		setTimeout(() => {
			const s = this.state;
			this.setState({...s, loaded: true})
		}, 8000);
	
		setTimeout(() => {
			const s = this.state;
			this.setState({...s, loaded: true})
		}, 16000);
	
		setTimeout(() => {
			const s = this.state;
			this.setState({...s, loaded: true})
		}, 32000);
	
	  }

	  
	
	handleChange = (e) => {
		const temp = this.state;
		console.log(e.target.value);
		this.setState({
			...temp,
			graphState:e.target.value
		});
		console.log(this.state.graphState);
	}

	render() {
        {
            var temp = [];
            this.state.data.forEach((item) => {
                temp.push({label: item.key,
                            y: item.count});
            });
        }

		const options = {
			title: {
				text: this.props.heading
			},
			data: [
			{
				// Change type to "column","doughnut", "line", "splineArea", etc.
                type: this.state.graphState,
                dataPoints: temp
				// dataPoints: [
				// 	{ label: "2015",  y: 10  },
				// 	{ label: "2016", y: 15  },
				// 	{ label: "2017", y: 25  },
				// 	{ label: "2018",  y: 30  },
				// 	{ label: "2019",  y: 28  }
				// ]
			}
			]
		}



		return (
		<div>
			<form>
				<select 
					value={this.state.graphState}
					onChange={this.handleChange}
				>
					<option value='column'>Bar</option>
					<option value='line'>Line</option>
					<option value='splineArea'>Spline Area</option>
				</select>
			</form>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Graph4;