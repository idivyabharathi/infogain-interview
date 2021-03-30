import React, { useEffect, useState } from "react"
import { Box, TextField } from "@material-ui/core"

import OrderList from "../components/recent-orders/order-list"
import Layout from "../components/layout"
import OrderSkeleton from "../components/common/skeleton"

const RecentOrders = () => {
  const [orderList, setOrderList] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchOrderList, setSearchOrderList] = useState([])
  const [search, setSearch] = useState("")
  const [endIndex, setEndIndex] = useState(10)

  useEffect(() => {
    // Timeout To show skeleton
    setTimeout(() => {
      fetch("../orders.json")
        .then(resp => resp.json())
        .then(data => {
          setOrderList(data.orders)
          setSearchOrderList(data.orders)
          setLoading(false)
        })
    }, 1000)
  }, [])

  useEffect(() => {
    const items = orderList.filter(data => {
      if (search == null) return data
      if (
        data.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
        data.itemName.toLowerCase().includes(search.toLowerCase())
      ) {
        return data
      }
      return null
    })
    setSearchOrderList(items)
  }, [search])

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll..")
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 &&
        !loading &&
        endIndex < searchOrderList.length
      ) {
        setLoading(true)
        setTimeout(() => {
          setEndIndex(endIndex + 4)
          setLoading(false)
        }, 1000)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [endIndex, loading])

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  return (
    <Layout>
      <Box>
        <Box component="h1">Recent Orders</Box>

        {searchOrderList?.length > 0 ? (
          <>
            <TextField
              label="Search"
              type="search"
              onChange={handleSearchChange}
            />
            <OrderList
              orderList={searchOrderList.slice(0, endIndex)}
              search={search}
            />
          </>
        ) : (
          <></>
        )}
        {loading ? <OrderSkeleton /> : <></>}
      </Box>
    </Layout>
  )
}

export default RecentOrders
