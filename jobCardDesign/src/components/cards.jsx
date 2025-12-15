import React from 'react'

const cards = (props) => {
  return (
   
      <div className="cards">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          
          <button >save </button>
        </div>
        <div className="midel">
            <h1> {props.companyName} <span>{props.datePoast}</span></h1>
            <h3>{props.post}</h3>
            <p><span>{props.tag1}</span> <span>{props.tag2}</span></p>
        </div>
        <div className="bottom">
            <div className="left">
              <h2>{props.pay}</h2>
              <span>{props.location}</span>
            </div>

            <div className="right">
                <button >apply now</button>
            </div>
        </div>
      </div>
  )
}

export default cards;