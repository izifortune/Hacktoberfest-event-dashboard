import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Chart from "../components/issues-pr-chart";
import TopIssues from "../components/top-issues";
import TopAuthors from "../components/top-authors";
import Logo from "../components/logo";
import SponsorLogo from "../components/sponsor-logo";

import { searchIssuesAndPr } from "../utils/github";


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      pull_requests: []
    };
  }
  async componentDidMount() {
    try {
      const { issues, pull_requests } = await searchIssuesAndPr();
      this.setState({
        issues,
        pull_requests
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Logo />
        <SponsorLogo />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Chart
            pull_requests={this.state.pull_requests}
            issues={this.state.issues}
          />
          <div>
            <TopAuthors pull_requests={this.state.pull_requests} />
            <TopIssues issues={this.state.issues} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
