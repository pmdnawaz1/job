import React from 'react'
import '../styles/SearchedCard.css'
import { connect } from 'react-redux'
import { saveSearchedJobToJoblist } from '../actions'


const SearchedCard = (props) => {
  const handleSave = () => {
    props.saveSearchedJobToJoblist(props.info, props.joblist_id)

  }
  return(
    <div className="searched-job-card">
      <div className="search-card-header">
        <h3>
          {props.info.title}
          <i onClick={handleSave} className="far fa-save"></i>
        </h3>
      </div>
        <p>
          <i className="far fa-building"></i> <span className="search-span">{props.info.company_name}</span>
          <i className="fas fa-map-pin"></i><span className="search-span">{props.info.location}</span>
        </p>
        <a className="link-btn" rel="noopener noreferrer" target="_blank" href={props.info.links}>Job Link</a>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    joblist_id:state.selectedJoblist.id
  }
}

export default connect(mapStateToProps, { saveSearchedJobToJoblist })(SearchedCard)
