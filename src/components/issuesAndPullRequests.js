import React from "react";
import Chart from "chart.js";
import "chartjs-plugin-colorschemes";
import { Card } from "./card";

class IssuesAndPullRequests extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // TODO Filter issues open and closed
    this.myChart.data.datasets.forEach(el => {
      if (el.label === "PullRequests Open") {
        el.data = [this.props.pull_requests.length];
      } else if (el.label === "Issues Open") {
        el.data = [this.props.issues.length];
      } else if (el.label === "Issues Closed") {
        el.data = [this.props.issues.length];
      }
    });
    this.myChart.update();
  }

  componentDidMount() {
    var ctx = document.getElementById("pull_requests_open");
    this.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Count "],
        datasets: [
          {
            label: "PullRequests Open",
            data: [this.props.pull_requests.length]
          },
          {
            label: "Issues Open",
            data: [this.props.issues.length]
          },
          {
            label: "Issues Closed",
            data: [this.props.issues.length]
          }
        ]
      },
      options: {
        plugins: {
          colorschemes: {
            scheme: "tableau.Tableau10"
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <Card>
        <h3>Issues and PullRequests</h3>
        <div style={{ width: "400px" }}>
          <canvas id="pull_requests_open" width="400" height="400"></canvas>
        </div>
      </Card>
    );
  }
}

export default IssuesAndPullRequests;
