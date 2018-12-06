import jwtDecode from 'jwt-decode'

export let baseURL = 'https://mudkip-backend.herokuapp.com/api';


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
        dispatch({
          type: 'POST_JOB',
          payload:response
        })
      })
    }
}

export const scrapeJobs = (jobData) => {
  return dispatch => {
    let options = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        zipscrape:jobData
      })
    }
    fetch(`${baseURL}/zipscrapes`, options)
      .then(r=>r.json())
      .then(resp=>{
        dispatch({
          type:"GET_WEB_JOBS",
          payload: resp
        })
      })
  }
}

export const saveSearchedJobToJoblist = (jobInfo, joblistId) => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let options = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({...jobInfo, joblist_id:joblistId, job_link:jobInfo.links})
    }
    return fetch(`${baseURL}/jobs`, options)
      .then(r=>r.json())
      .then((response)=>{
        dispatch({
          type: 'SAVE_JOB',
          payload:response
        })
      })
    }
}

export const selectJob = (jobObj) => {
  return {
    type:"SELECT_JOB",
    payload: jobObj
  }
}

export const updateJob = (jobObj, id) => {
  return dispatch => {
    let token = "Bearer " + localStorage.getItem("jwt");
    let options = {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json',
        'Authorization': token
      },
      body:JSON.stringify({
        job: {
          title: jobObj.title,
          company_name: jobObj.company,
          location: jobObj.location,
          snippet: jobObj.description,
          job_link:jobObj.link,
          salary:jobObj.salary,
          deadline:jobObj.deadline,
          applied:jobObj.applied,
          interview1: jobObj.interview1,
          interview2: jobObj.interview2,
          offer:jobObj.offer
        }
      })
    }
    return fetch(`${baseURL}/jobs/${id}`, options)
      .then(r=>r.json())
      .then((response)=>{
        dispatch({
          type: 'UPDATE_JOB',
          payload:response
        })
      })
    }
}

export const submitTask = (taskObj, jobId) => {
  return dispatch => {
    let token = 'Bearer' + localStorage.getItem("jwt");
    let options = {
      method: "POST",
      headers:{
        'Content-Type':"application/json",
        Authorization: token
      },
      body: JSON.stringify({
        task: {
          content: taskObj.content,
          job_id: jobId,
          due_date: taskObj.due_date
        }
      })
    }
    return fetch(`${baseURL}/tasks`,options)
      .then(r=>r.json())
      .then((response)=>{
        dispatch({
          type:'POST_TASK',
          payload:response
        })
      })
  }
}

export const uploadFiles = (fileObj, jobId) => {
  return dispatch => {
    let token = 'Bearer' + localStorage.getItem("jwt");
    let options = {
      method: "POST",
      headers:{
        'Content-Type':"application/json",
        Authorization: token
      },
      body: JSON.stringify({
        job_file: {
          resume_link:fileObj.resumeUrl,
          job_id: jobId,
          cover_letter_link:fileObj.coverLetterUrl
        }
      })
    }

    fetch(`${baseURL}/job_files`, options)
      .then(r=>r.json())
      .then((resp)=>{
        dispatch({
          type:'SAVE_FILES',
          payload: resp
        })
      })

  }
}
