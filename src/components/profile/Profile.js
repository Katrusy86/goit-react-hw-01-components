import React from 'react';
import PropTypes from 'prop-types'
import styles from './profile.module.css'

export const Profile = ({avatar,name,tag,location,followers,views,likes}) => {
  return (
<>
  <div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={avatar}
      alt="user avatar"
      className={styles.avatar}
    />
    <p className={styles.name}>{name}</p>
  <p className="tag">@{tag}</p>
  <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.stats}>
    <li className={styles.block}>
      <span className={styles.label}>Followers</span>
  <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.block}>
      <span className={styles.label}>Views</span>
  <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.block}>
      <span className={styles.label}>Likes</span>
  <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
</>
  )}

Profile.defaultProps = {
avatar:'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
tag:"@jgluke"
}

Profile.protoType = {
  name: PropTypes.string.isRequired,
  followers:PropTypes.number,
  views:PropTypes.number,
  likes:PropTypes.number

}