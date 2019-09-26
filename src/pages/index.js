import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IssuesAndPullRequests from './issuesAndPullRequests'
import IssuesList from './issuesList'

import { searchIssuesAndPr } from '../utils/github'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      pull_requests: []
    }
  }
  async componentDidMount() {
    try {
      const { issues, pull_requests } = await searchIssuesAndPr();
      this.setState({
        issues,
        pull_requests
      });
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1>Welcome to HacktoberFestDublin</h1>
        <IssuesAndPullRequests/>
        <IssuesList issues={this.state.issues}/>
      </Layout>
    )
  }
}

export default IndexPage
