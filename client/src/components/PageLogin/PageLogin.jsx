import React from 'react'
import { useState } from 'react'
import { doLogInForSaga } from '../../redux/actions/actionLogIn'
import { useDispatch } from 'react-redux'
import styles from './PageLogin.module.css'

const PageLogin = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onLogin = async () => {
    dispatch(doLogInForSaga(form))
  }

  return (
    <div className={styles.page}>
      Page login
      <input
        name="email"
        placeholder="e-mail"
        onChange={onChangeForm}
        value={form.email}
      />
      <input
        name="password"
        placeholder="password"
        onChange={onChangeForm}
        value={form.password}
      />
      <button onClick={onLogin}>Submit</button>
    </div>
  );
}

export default PageLogin;