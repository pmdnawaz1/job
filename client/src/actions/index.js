import jwtDecode from 'jwt-decode'

export let baseURL = 'http://localhost:3002/api';


export const fetchJoblists = (tokenId) =>{
  return dispatch => {
    let token = "Bearer " + tokenId;
    fetch(`${baseURL}/users/${jwtDecode(tokenId).sub}`,{
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


export const getSelectedJoblist = (tokenId, joblist_id) => {
  return dispatch => {
    let token = "Bearer " + tokenId;
    return fetch(`${baseURL}/joblists/${joblist_id}`,{
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
    })
      .then(r=>r.json())
      .then((joblist)=>{
        dispatch({
          type:"SET_JOBLIST",
          payload:joblist
        })
      })
  }

}

export const selectJoblist = (objId) =>{
  return dispatch => {
    let tokenId = localStorage.getItem('jwt')
    let token = "Bearer " + tokenId;
    return fetch(`${baseURL}/users/${jwtDecode(tokenId).sub}`,{
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        dashboard_id: objId
      })
    })
    .then(r=>r.json())
    .then((resp)=>{
      dispatch({
        type:"UPDATE_DASHBOARD_ID",
        payload: resp
      })
    })
  }
}


export const postJoblist = (name) => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let options = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        joblist: {name}
      })
    }
    return fetch(`${baseURL}/joblists`, options)
      .then(r=>r.json())
      .then((response)=>{
        dispatch({
          type: 'POST_JOBLIST',
          payload:response
        })
      })
    }
  }

export const postJob = (jobObj) => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let options = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        job: jobObj
      })
    }
    return fetch(`${baseURL}/jobs`, options)
      .then(r=>r.json())
      .then((response)=>{
        debugger
        dispatch({
          type: 'POST_JOB',
          payload:response
        })
      })
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
