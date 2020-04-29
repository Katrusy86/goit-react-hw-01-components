import React from 'react';
import user from '../components/profile/user.json'
import statisticalData from '../components/statistics/statistical-data.json'
import friends from '../components/friendList/friends.json'
import items from '../components/transactionHistory/transactions.json'
import {Profile} from './profile/Profile'
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendList/FriendList';
import { TransactionHistory } from './transactionHistory/TransactionHistory';


export const App = () => {
    return (
        <>
        <Profile avatar={user.avatar} 
        name={user.name} 
        tag={user.tag} 
        location={user.location} 
        followers ={user.stats.followers}  
        views ={user.stats.views}  
        likes ={user.stats.likes}/>
        <Statistics stats = {statisticalData} />
        <FriendList friends = {friends}/>
        <TransactionHistory items = {items}/>
        </>
    )
}