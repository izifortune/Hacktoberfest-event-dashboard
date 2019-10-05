import React from "react";
import Chart from "chart.js";
import "chartjs-plugin-colorschemes";
import { Card } from "./card";
import { H3 } from "./headings";

class IssuesPrChart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.myChart.data.datasets.forEach(el => {
      if (el.label === "PullRequests Open") {
        el.data = [
          this.props.pull_requests.filter(pr => pr.state === "open").length
        ];
      } else if (el.label === "PullRequests Closed") {
        el.data = [
          this.props.pull_requests.filter(pr => pr.state === "closed").length
        ];
      } else if (el.label === "Issues Open") {
        el.data = [this.props.issues.filter(pr => pr.state === "open").length];
      } else if (el.label === "Issues Closed") {
        el.data = [
          this.props.issues.filter(pr => pr.state === "closed").length
        ];
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
            label: "PullRequests Open"
          },
          {
            label: "PullRequests Closed"
          },
          {
            label: "Issues Open"
          },
          {
            label: "Issues Closed"
          }
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: "white",
            fontFamily: "Space Mono",
            fontSize: 14
          }
        },
        plugins: {
          colorschemes: {
            scheme: "tableau.Tableau10"
          }
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                fontFamily: "Space Mono",
                fontSize: 14,
                fontColor: "white"
              },
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                fontFamily: "Space Mono",
                fontSize: 14,
                fontColor: "white"
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
        <H3>Issues and PullRequests</H3>
        <div style={{ width: "400px" }}>
          <canvas id="pull_requests_open" width="400" height="400"></canvas>
        </div>
      </Card>
    );
  }
}

export default IssuesPrChart;
