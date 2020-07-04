import React from 'react'
import { useState } from 'react'
import { SignUpForSaga } from '../../redux/actions/actionSignUp'
import { useDispatch } from 'react-redux';

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

  const request = async () => {
    dispatch(SignUpForSaga(form))
  }

  return (
    <div className="App">
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
      <button onClick={request}>Submit</button>
    </div>
  );
}

export default PageRegister;
