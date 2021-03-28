import { List, ListItem, ListItemText,Divider, Button } from "@material-ui/core"
import { Link } from "gatsby"

import { Pagination } from "@material-ui/lab"
import React from "react"

const OrderItem= (props)=>{
    return(
        <>
        <ListItem>
            <ListItemText>{props.item.orderDate}</ListItemText>
            <ListItemText>{props.item.orderNumber}</ListItemText>
            <ListItemText>{props.item.itemName}</ListItemText>
            <ListItemText>{props.item.orderTotal}</ListItemText>
            <ListItemText>{props.item.orderStatus}</ListItemText>
            <Link style={{textDecoration: 'none'}} to="/orderdetails/" state={{orderNumber: props.item.orderNumber}}>
                <Button style={{textTransform: 'none'}} color="primary" variant="contained">Order Details</Button>
            </Link>
        </ListItem>
        <Divider/>
        </>
    )
}

const OrderList= (props)=>{
    return(
        <List>
        {
            props.orderList && props.orderList.map((orderItem) => {
                return <OrderItem item={orderItem} key={orderItem.orderNumber}></OrderItem>
            })
        }
        </List>
    )
}

export default OrderList;