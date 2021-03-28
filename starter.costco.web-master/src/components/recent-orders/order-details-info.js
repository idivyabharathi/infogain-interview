import React from "react"
import {List, ListItem, Box, Paper, Grid, ListItemText, makeStyles, Typography, Divider} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const OrderDetailsInfo= (props) => {
    
    return(
        <Box component='div'>
            <Typography variant='subtitle1'>Order #:{props.orderDetails.orderNumber}</Typography>
            <Typography variant='subtitle2'>Order Date:{props.orderDetails.orderDate}</Typography>
            <Typography variant='subtitle2'>Total:{props.orderDetails.currency+props.orderDetails.orderTotal}</Typography>
            <Typography variant='subtitle2'>Status:{props.orderDetails.orderStatus}</Typography>
        </Box>
    )
}

const ShippingDetails= (props) => {
    return(
        <Box component='div'>
            <Typography variant='h5'>Shipping Address</Typography>
            <Typography variant='subtitle2'>{props.shippingDetails.street}</Typography>
            <Typography variant='subtitle2'>{props.shippingDetails.city+props.shippingDetails.state}</Typography>
            <Typography variant='subtitle2'>{props.shippingDetails.zipcode}</Typography>
        </Box>
    )
    
}

const BillingDetails= (props) => {
    return(
        <Box component='div'>
            <Typography variant='h5'>Billing Address</Typography>
            <Typography variant='subtitle2'>{props.billingDetails.street}</Typography>
            <Typography variant='subtitle2'>{props.billingDetails.city+props.billingDetails.state}</Typography>
            <Typography variant='subtitle2'>{props.billingDetails.zipcode}</Typography>
        </Box>
    )
    
}

const ItemDetails= (props) =>{
    return(
        <List>
            <Typography align='left' variant='h5'>Item Details</Typography>
            {props.items.map((item) => {
                return <ListItem>
                    <ListItemText>{item.name}</ListItemText>
                    <ListItemText>{item.description}</ListItemText>
                    <ListItemText>{item.type}</ListItemText>
                    <Divider component="div" />
                </ListItem>
            })}
        </List>
    )
    
}



export {OrderDetailsInfo, ShippingDetails, BillingDetails, ItemDetails};