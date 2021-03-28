import React, {useState,useEffect} from "react"
import {Box, Paper, Grid, ListItemText, makeStyles} from "@material-ui/core"


import Layout from "../components/layout"
import {OrderDetailsInfo, ShippingDetails, 
    BillingDetails, ItemDetails} from "../components/recent-orders/order-details-info"
import OrderSkeleton from "../components/common/skeleton"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        border: '1px solid #ccc',
        padding: theme.spacing(4)
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const OrderDetails=({location})=>{

    const classes = useStyles();

    const [orderDetails, setOrderDetails]= useState(null);

    useEffect(() => {
        //const path="../"+location.state.orderNumber+".json"; //To handle all orders
        const path="../114-7104-401-616.json";
        //Timeout to show skeleton
        setTimeout(()=>{
            fetch(path)
                .then((resp)=> resp.json())
                .then((data) => {
                    setOrderDetails(data);
                })
        },1000)
        
    },[])
    return(
        <Layout>
            <Box component='h1'>Orders Details</Box>
            <div className={classes.root}>
            {orderDetails? <Grid container spacing={4}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <OrderDetailsInfo orderDetails={orderDetails}></OrderDetailsInfo>
                    </Paper>
                </Grid>
                  
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <ShippingDetails shippingDetails={orderDetails.shippingAddress}></ShippingDetails>
                    </Paper>
                </Grid>
                
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <BillingDetails billingDetails={orderDetails.billingAddress}></BillingDetails>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <ItemDetails items={orderDetails.items}></ItemDetails>
                    </Paper>
                </Grid>
            </Grid> : <OrderSkeleton/>
            }
            </div>
            
        </Layout>
    )
}

export default OrderDetails;