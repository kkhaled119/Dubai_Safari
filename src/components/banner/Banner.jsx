import './banner.css'
import skyscrepper from '../../images/skyscrepper.jpg'

const Banner = ()=>{
    return(
            <div className="banner">
                <div className="banner-wrapper">
                    <div className="banner-layout">
                        <h1 className="banner-layout-title">
                            DUBAI IS WATTING FOR YOU
                        </h1>
                    </div>
                    <img src={skyscrepper} alt='dubai-banner' className='banner-img'/> 
                </div>
            </div>
    )
}

export default Banner;
