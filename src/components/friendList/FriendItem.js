import React from 'react'
import PropTypes from 'prop-types'
import styles from './friendList.module.css'


export const FriendItem = ({friend:{isOnline,avatar,name,alt}}) => (
<li className={styles.item}>
  <span className={isOnline?styles.status_online:styles.status_offline}>{isOnline}</span>
    <img className={styles.avatar} src={avatar} alt={alt} width="48" />
  <p className={styles.name}>{name}</p>
</li>
);


FriendItem.defaultProps = {
  alt:"friend image"
}

FriendItem.propTypes = {
  friend:PropTypes.shape({
    isOnline:PropTypes.bool,
    avatar:PropTypes.string,
    name:PropTypes.string
  })

}