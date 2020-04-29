import React from 'react'
import PropTypes from 'prop-types'
import {FriendItem} from '../friendList/FriendItem'
import styles from './friendList.module.css'

export const FriendList = ({friends}) => (
    <ul className={styles.friend_list}>
        {friends.map(friend =><FriendItem friend={friend} key={friend.id}/>)}
    </ul>
)

FriendList.propTypes = {
    friends:PropTypes.arrayOf(PropTypes.object)
}

