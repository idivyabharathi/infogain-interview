import React from "react"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to the site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Button color="primary" variant="contained">
      <Link
        style={{ color: "#fff", textDecoration: "none" }}
        to="/recentorders/"
      >
        Recent Orders
      </Link>
    </Button>
  </Layout>
)

export default IndexPage
