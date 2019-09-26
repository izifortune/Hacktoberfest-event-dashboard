import React from "react"
import Chart from 'chart.js';
import 'chartjs-plugin-colorschemes';

class IssuesAndPullRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    var ctx = document.getElementById('pull_requests_open');
    this.myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Count '],
        datasets: [{
          label: 'PullRequests',
          data: [20]
        }, {
          label: 'Issues',
          data: [23]
        }]
      },
      options: {
        plugins: {
          colorschemes: {
            scheme: 'tableau.Tableau10'
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

  render() {
    return (
      <canvas id="pull_requests_open" width="400" height="400"></canvas>
    )
  }
}

export default IssuesAndPullRequests;
