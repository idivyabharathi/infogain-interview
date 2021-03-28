import React from "react"
import { Link } from "gatsby"
import {Button} from "@material-ui/core"
import {BrowserRouter,Switch, Route} from "react-router-dom"

import Layout from "../components/layout"
import RecentOrders from "./recentorders"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to Costco site.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Button color="primary" variant="contained">
      <Link style={{color: '#fff', textDecoration: 'none'}} to="/recentorders/">Recent Orders</Link>
    </Button>
    
  </Layout>
)

export default IndexPage
