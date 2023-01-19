import  star  from '../images/star.png'
import  katie  from '../images/katie-zaferes.png'

const Card = () => {
    return (
        <div className='card'>
            <img src={katie} className='card-image'></img>
            <div className='card-stats'>
                <span><img src={star} className='card-star'></img></span>
                <span>5.0</span>
                <span>(6) • USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p className='card-end'><b>From $136</b> / person</p>  
        </div>
  
    )
}

export { Card }