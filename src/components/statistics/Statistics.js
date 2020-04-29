import React from 'react';
import PropTypes from 'prop-types'
import {StaticItem} from './StaticItem'
import styles from './statistics.module.css'


 export const Statistics = ({stats, title}) => (
<section className={styles.statistics}>
 <h2 className={styles.title}>{title}</h2>

  <ul className={styles.stat_list}>
      {stats.map(stat => <StaticItem stat={stat} key={stat.id}/>)}
  </ul>
</section>
)

Statistics.defaultProps = {
    title:"Upload stats",
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({key:PropTypes.string})).isRequired,
}
