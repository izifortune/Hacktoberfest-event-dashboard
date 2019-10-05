import PropTypes from "prop-types"
import React from "react"
import { Header as Head, Site } from 'tabler-react';

const Header = ({ siteTitle }) => (
  <Site.Header >
      <Head.H1 style={{ margin: 0 }}>
        {siteTitle}
      </Head.H1>
  </Site.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
