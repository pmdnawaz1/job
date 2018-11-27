
let baseURL = 'http://localhost:3002/api';


export const fetchJoblists = (tokenId) =>{
  return dispatch => {
    let token = "Bearer " + tokenId;
    fetch(`${baseURL}/joblists`,{
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      }
    })
      .then(r=>r.json())
      .then(data => {
        dispatch({
          type:'FETCH_JOBLISTS',
          payload: data
        })
      })
      .catch(console.error)
  }
}

export const postJoblist = (jobList) => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let options = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        joblist: {
          name: jobList.name
        }
      })
    }
    return fetch(`${baseURL}/joblists`, options)
      .then(r=>r.json())
      .then(result => {
        dispatch({
          type:"POST_JOBLIST",
          payload: result
        })
      })
      .catch(console.error)
  }
}

// export const displayJobs = (joblistId) => {
//   return dispatch => {
//     let token = "Bearer " + localStorage.getItem("jwt");
//     let options = {
//       method: 'GET',
//       headers:{
//         'Content-Type':'application/json',
//         'Authorization': token
//       }
//     }
//     fetch(`${baseURL}/joblists/${joblistId}`)
//       .then(r=>r.json())
//   }
// }
