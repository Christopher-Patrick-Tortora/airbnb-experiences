import  star  from '../images/star.png'
import  katie  from '../images/katie-zaferes.png'

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='card'>
            { badgeText !== undefined && <div className='card-badge'>{badgeText}</div>}
            <img src={katie} alt="katie" className='card-image'></img>
            <div className='card-stats'>
                <span><img src={star} className='card-star'></img></span>
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p className='card-end'><b>From ${props.price}</b> / person</p>  
        </div>
  
    )
}

export { Card }