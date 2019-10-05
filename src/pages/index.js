import React from "react"
import "../style.css";
import Layout from "../components/layout"
import SEO from "../components/seo"
import IssuesAndPullRequests from '../components/issuesAndPullRequests'
import IssuesList from '../components/issuesList'
import TopAuthors from '../components/topAuthors'

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
      })
//       this.setState({
//         issues: [{
//           "title": "Line Number Indexes Beyond 20 Not Displayed",
//           "html_url": "https://github.com/batterseapower/pinyin-toolkit/issues/132",
//           "assignee": null,
//         }],
//         pull_requests: [{
//           "user": {
//             "login": "Nick3C",
//             "id": 90254,
//             "node_id": "MDQ6VXNlcjkwMjU0",
//             "avatar_url": "https://secure.gravatar.com/avatar/934442aadfe3b2f4630510de416c5718?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
//         "gravatar_id": "",
//             "url": "https://api.github.com/users/Nick3C",
//             "html_url": "https://github.com/Nick3C",
//             "followers_url": "https://api.github.com/users/Nick3C/followers",
//             "following_url": "https://api.github.com/users/Nick3C/following{/other_user}",
//             "gists_url": "https://api.github.com/users/Nick3C/gists{/gist_id}",
//             "starred_url": "https://api.github.com/users/Nick3C/starred{/owner}{/repo}",
//             "subscriptions_url": "https://api.github.com/users/Nick3C/subscriptions",
//             "organizations_url": "https://api.github.com/users/Nick3C/orgs",
//             "repos_url": "https://api.github.com/users/Nick3C/repos",
//             "events_url": "https://api.github.com/users/Nick3C/events{/privacy}",
//             "received_events_url": "https://api.github.com/users/Nick3C/received_events",
//             "type": "User"
//           },
// }]
      // });
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <IssuesAndPullRequests pull_requests={this.state.pull_requests} issues={this.state.issues}/>
          <div>
            <TopAuthors pull_requests={this.state.pull_requests}/>
            <IssuesList issues={this.state.issues}/>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
