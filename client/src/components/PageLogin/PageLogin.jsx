import React from 'react'
import { useState } from 'react'
import { doLogInSaga } from '../../redux/actions/actionLogIn'
import { useDispatch } from 'react-redux';

const PageLogin = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const request = async () => {
    dispatch(doLogInSaga(form))
  }

  return (
    <div className="App">
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
      <button onClick={request}>Submit</button>
    </div>
  );
}

export default PageLogin;