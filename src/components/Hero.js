import grid from '../images/photo-grid.png'

const Hero = () => {
    return (
        <section>
            <img src={grid} className='hero-photo'></img>
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by
                one-of-a-kind hosts-all without leaving home.
            </p>
           
        </section>
    )
}

export { Hero }