import React from 'react'
import styles from './PageList.module.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getFromServer } from '../../utils/apiServer'
import { addNewListForSaga } from '../../redux/actions/actionList'
import OneList from '../OneList/OneList'

const PageList = () => {

  const dispatch = useDispatch()

  const userId = useSelector((state) => state.user.userId)
  const lists = useSelector((state) => state.lists.lists)

  const [listName, setListName] = useState('')

  const onChangeListName = (e) => {
    setListName(e.target.value)
  }

  const onSubmitListName = () => {
    dispatch(addNewListForSaga({ listName, userId }))
  }

  const onClick = async () => {
    const data = await getFromServer('/test')
    console.log('data:', data.message)
  }

  const arrayLists = lists.map((element) => {
    return (
      <div key={element.id}>
        <OneList
          id={element.id}
          title={element.title}
          list={element.list}
        />
      </div>
    )
  })

  return (
    <div className={styles.page}>
      PageList
      <div>{arrayLists}</div>

      <button onClick={onClick}>Test</button>

      <input
        name="listname"
        placeholder="listname"
        onChange={onChangeListName}
        value={listName}
      />

      <button onClick={onSubmitListName}>New list</button>

    </div>
  )
}

//completed

export default PageList