const token = (localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')).token : null
//TODO Try to use redux-persist instead of directly accessing locaStorage. 
//https://trello.com/c/WYWtNpjp/19-use-redux-persist-to-store-user-token

export const getFromServer = async (path) => {

  const response = await fetch(path,
    {
      method: 'GET',
      body: null,
      headers: { Authorization: `Bearer ${token}` }
    })

  const result = await response.json()
  return result
}
export const postToServer = async (path, data) => {

  const response = await fetch(path,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

  const result = await response.json()
  return result
}