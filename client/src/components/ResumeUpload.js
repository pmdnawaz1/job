import React, { Component } from 'react'
import { storage } from './Firebase'
import JobHeader from './JobHeader'
import JobNav from './JobNav'
import { connect } from 'react-redux'
import '../styles/ResumeUpload.css'
import { uploadFiles } from '../actions'

class ResumeUpload extends Component {

  state={
    resume: "",
    resumeUrl: "",
    coverLetter:"",
    coverLetterUrl: ""
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({
        resume: e.target.files[0]
      })
    }
  }

  handleCover = (e) => {
    if (e.target.files[0]) {
      this.setState({
        coverLetter: e.target.files[0]
      })
    }
  }

  handleUpload = () => {
    const uploadTask = storage.ref(`resumes/${this.state.resume.name}`).put(this.state.resume);
    uploadTask.on('state_changed',
      (snapshot) => {
      }
    ,
    (error) => {
      console.log(error)
    }
    ,
    () => {
      storage.ref('resumes').child(this.state.resume.name).getDownloadURL()
        .then(url => {
          this.setState({
            resumeUrl:url
          })
        })
        .then(()=>{
          const uploadCover = storage.ref(`letters/${this.state.coverLetter.name}`).put(this.state.coverLetter);
          uploadCover.on('state_changed',
          (snapshot) => {

          },
          (error) => {
            console.log(error);
          },
          () => {
            storage.ref('letters').child(this.state.coverLetter.name).getDownloadURL()
              .then(url => {
                this.setState({
                  coverLetterUrl: url
                }, () => {
                  this.props.uploadFiles(this.state, this.props.job.id)
                })
              })
          }
        )
        })
    }
  )
  }

  render(){
    let checkJob=()=>{
      if (typeof this.props.job.id !== 'undefined') {
        return(
          <div>
            <JobHeader title={this.props.job.title} />
            <div className="upload-btn-wrapper">
              <button className="btn">Pick a Resume</button>
              <input onChange={this.handleChange} type="file" name="myfile" />
            </div>
            <div className="upload-btn-wrapper">
              <button className="btn">Pick a Cover Letter</button>
              <input onChange={this.handleCover} type="file" name="" />
            </div>
            <button className="upload-resume" onClick={this.handleUpload}>Upload {this.state.resume.name} and {this.state.coverLetter.name}</button>
            <JobNav jobId={this.props.job.id} />
          </div>
        )
      }else{
        return(<div>{this.props.history.push("/dashboard")}</div>)
      }
    }
    return checkJob()

  }
}

const mapStateToProps = (state) => {
  return{
    job:state.selectedJob
  }
}

export default connect(mapStateToProps, { uploadFiles })(ResumeUpload)
