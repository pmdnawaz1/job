import React, { Component } from 'react'
import { storage } from './Firebase'
import JobHeader from './JobHeader'
import JobNav from './JobNav'
import { connect } from 'react-redux'
import '../styles/ResumeUpload.css'
import { uploadFiles } from '../actions'

class ResumeUpload extends Component {

  state={
    resume: {name:'resume'},
    resumeUrl: "",
    coverLetter:{name:"coverletter"},
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
        if (!this.props.job.job_file) {
          return(
            <div className="file-page">
              <JobHeader title={this.props.job.title} />
              <h3>Please upload your Resume and Coverletter in PDF format.</h3>
              <div className="upload-btn-wrapper">
                <button className="btn">Pick a Resume</button>
                <input onChange={this.handleChange} type="file" name="myfile" />
              </div>
              <p>You Picked: {this.state.resume.name}</p>
              <div className="upload-btn-wrapper">
                <button className="btn">Pick a Cover Letter</button>
                <input onChange={this.handleCover} type="file" name="" />
              </div>
              <p>You Picked: {this.state.coverLetter.name}</p>
              <button className="upload-resume" onClick={this.handleUpload}>Upload {this.state.resume.name} and {this.state.coverLetter.name}</button>
              <JobNav jobId={this.props.job.id} />
            </div>
          )
        }else{
          return(
            <div className="file-page">
              <JobHeader title={this.props.job.title} />
              <div className="files-show">
                <div className="resume-show">
                  <iframe type="application/pdf" title="resume" src={this.props.job.job_file.resume_link} />
                  <a target="_blank" rel="noopener noreferrer" href={this.props.job.job_file.resume_link}>Download Resume</a>
                </div>
                <div className="cover-letter-show">
                  <iframe type="application/pdf" title="coverLetter" src={this.props.job.job_file.cover_letter_link} />
                    <a target="_blank" rel="noopener noreferrer" href={this.props.job.job_file.cover_letter_link} >Download Cover Letter</a>
                </div>
              </div>

              <JobNav jobId={this.props.job.id} />
            </div>
          )
        }
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
