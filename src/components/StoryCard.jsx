import React from 'react'
import PropTypes from 'prop-types'

const StoryCard = props => {

  let badgeText
    if (props.items.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.items.location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className='card'>
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.items.coverImg} alt="" className="card--image" />
        <span className="card--stats">⭐ {props.items.stats.rating} ({props.items.stats.reviewCount}).{props.items.location}</span>
        <span className="card--title">{props.items.title}</span>
        <span className="card--price"><strong> From $ {props.items.price}</strong>/per person </span>
    </div>
  )
}

// StoryCard.propTypes = {
//   img: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
//   reviews: PropTypes.string.isRequired,
//   country: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired
// };

export default StoryCard