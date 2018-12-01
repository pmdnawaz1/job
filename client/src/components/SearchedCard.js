import React from 'react'
import '../styles/SearchedCard.css'


const SearchedCard = (props) => {
  return(
    <div className="searched-job-card">
      <div className="search-card-header">
        <h3>
          {props.info.title}
          
        </h3>
      </div>
        <p>
          <i className="far fa-building"></i> <span className="search-span">{props.info.company_name}</span>
          <i className="fas fa-map-pin"></i><span className="search-span">{props.info.location}</span>
        </p>
        <a className="link-btn" target="_blank" href={props.info.links}>Job Link</a>
    </div>
  )
}

export default SearchedCard
