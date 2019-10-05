import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Chart from "../components/issues-pr-chart";
import TopIssues from "../components/top-issues";
import TopAuthors from "../components/top-authors";
import Logo from "../components/logo";
import SponsorLogo from "../components/sponsor-logo";
import { searchIssuesAndPr } from "../utils/github";

const HContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const VContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


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
        <HContainer style={{ alignItems: 'center', margin: '1.25rem 0' }}>
          <Logo />
          <h2>and</h2> 
          <SponsorLogo />
        </HContainer>
        <HContainer>
          <Chart
            pull_requests={this.state.pull_requests}
            issues={this.state.issues}
          />
          <VContainer>
            <TopAuthors pull_requests={this.state.pull_requests} />
            <TopIssues issues={this.state.issues} />
          </VContainer>
        </HContainer>
      </Layout>
    );
  }
}

export default IndexPage;
