export const getProfile = token => {
    return axios
      .get('users/profile', {
        headers: { Authorization: ` ${token}` }
      })
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }