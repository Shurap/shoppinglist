import React from 'react'
import styles from './OneItem.module.css'

const OneItem = (props) => {

  return (
    <div className={styles.page}>
      {/* {props.id} */}
      {props.note}
      {props.count}
      {props.completed}
    </div>
  )
}

export default OneItem