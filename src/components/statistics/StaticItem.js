import React from 'react'
import PropTypes from 'prop-types'
import styles from './statistics.module.css'


export const StaticItem = ({stat:{label,percentage}}) => 
(
    <li className={styles.item} style={{backgroundColor:randomColor()}}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
    </li>
    
    );

    const randomColor = () => {
        return '#'+ Math.floor(Math.random()*16777215).toString(16); 
    }
    

StaticItem.propTypes= {
    stat:PropTypes.shape({
        label:PropTypes.string,
        percentage:PropTypes.number
    })
}

