import React from 'react'
import styles from './OneList.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewItemForSaga } from '../../redux/actions/actionItem'
import OneItem from '../OneItem/OneItem'

const OneList = (props) => {

  const [form, setForm] = useState({
    note: '',
    count: ''
  })

  const dispatch = useDispatch()

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    dispatch(addNewItemForSaga({
      note: form.note,
      count: form.count,
      id: props.id
    }))
  }

  const arrayItems = props.list.map((element) => {
    return (
      <div key={element._id}>
        <OneItem
          id={element._id}
          note={element.note}
          count={element.count}
          completed={element.completed}
        />
      </div>
    )
  })

  return (
    <div className={styles.page}>
      {props.title}
      {/* {props.id} */}

      <input
        name="note"
        placeholder="note"
        onChange={onChangeForm}
        value={form.note}
      />
      <input
        name="count"
        placeholder="count"
        onChange={onChangeForm}
        value={form.count}
      />

      <button onClick={onSubmit}>Submit</button>

      {arrayItems}
    </div>
  )
}

export default OneList