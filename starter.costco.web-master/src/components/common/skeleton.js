import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const OrderSkeleton= ()=>{
    return(
        <>
                <Skeleton variant="rect"></Skeleton><br/>
                <Skeleton variant="rect" height={72} /><br/>
                <Skeleton variant="rect" height={32} />
        </>
    )
}

export default OrderSkeleton;

