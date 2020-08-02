import React from 'react'
import styles from './OneItem.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeItemForSaga, deleteItemForSaga } from '../../redux/actions/actionItem'

const OneItem = (props) => {

  const userId = useSelector((state) => state.user.userId)
  const dispatch = useDispatch()

  const onDeleteItem = () => {
    dispatch(deleteItemForSaga({
      userId,
      listId: props.listId,
      id: props.id,
    }))
  }

  const onClickItem = () => {
    dispatch(changeItemForSaga({
      userId,
      listId: props.listId,
      id: props.id,
      note: props.note,
      count: props.count,
      completed: (!props.completed)
    }))
  }

  return (
    <div>
      <div
        className={styles.page}
        onClick={onClickItem}
      >
        {props.note}
        {props.count}
        {(props.completed) ? 'T' : 'F'}
      </div>
      <button onClick={onDeleteItem}>Delete {props.note}</button>
    </div>
  )
}

export default OneItem