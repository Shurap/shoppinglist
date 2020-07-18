import React from 'react'
import { useState } from 'react'
import { SignUpForSaga } from '../../redux/actions/actionSignUp'
import { useDispatch } from 'react-redux';
import styles from './PageRegister.module.css'

const PageRegister = () => {

  const [form, setForm] = useState({
    nick: '',
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  //TODO These handlers get replicated. It looks like we need 
  // to move them to a separated hook and use it in different components. 
  // https://trello.com/c/RjnU29Eq/20-useform-hook

  const onSignUp = async () => {
    dispatch(SignUpForSaga(form))
  }

  return (
    <div className={styles.page}>
      Page register

      <input
        name="nick"
        placeholder="nick"
        onChange={onChangeForm}
        value={form.nick}
      />

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
      <button onClick={onSignUp}>Submit</button>
    </div>
  );
}

export default PageRegister;
