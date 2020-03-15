import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph3 extends React.Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "User Ratings"
			},
			axisX: {
				title: "Votes",
				reversed: true,
			},
			axisY: {
				title: "rating",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "5 star" },
					{ y:  1800000000, label: "4 star" },
					{ y:  800000000, label: "3 star" },
					{ y:  563000000, label: "2 star" },
					{ y:  376000000, label: "1 star" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}
export default Graph3;