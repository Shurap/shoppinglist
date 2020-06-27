import React from 'react'

const PageList = () => {

  const onClick = async () => {

    const token = (localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')).token : null

    const fetched = await fetch('/test',
      {
        method: 'GET',
        body: null,
        headers: { Authorization: `Bearer ${token}` }
      })
    const post = await fetched.json()
    console.log('post:', post.message)
  }


  return (
    <div>
      <button onClick={onClick}>Test</button>
    </div>
  )
}

export default PageList