import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import UnassignedIssues from "../components/unassigned-issues"
import Logo from "../components/logo";
import SponsorLogo from "../components/sponsor-logo";
import { searchIssuesAndPr } from "../utils/github";
import { tertiary } from "../vars";
import { H2 } from "../components/headings";

const HContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const VContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.25rem;
  min-width: 45%;
`;

const IndexH1 = styled.h1`
  margin-top: 1.25rem;
  color: ${tertiary};
  text-align: center;
`;

class UnassignedIssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
            pull_requests: []
        };
    }

    async fetch() {
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

    refresh() {
        return window.setInterval(async () => {
            await this.fetch();
        }, 60000);
    }

    async componentDidMount() {
        await this.fetch();
        this.interval = this.refresh();
    }

    componentWillUnmount() {
        this.interval();
    }

    render() {
        return (
            <Layout>
                <SEO title="Unassigned Issues" />
                <IndexH1>{this.props.data.site.siteMetadata.title} by</IndexH1>
                <HContainer style={{ alignItems: "center", margin: "1.25rem 0" }}>
                    <Logo />
                    <H2 secondary>and</H2>
                    <SponsorLogo />
                </HContainer>
                <HContainer>
                    <VContainer>
                        <UnassignedIssues
                            issues={this.state.issues}
                        />
                    </VContainer>
                </HContainer>
            </Layout>
        );
    }
}

export const query = graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
`;

export default UnassignedIssuesPage;
