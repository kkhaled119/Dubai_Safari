import DubaiLogo from '../../images/logo.png'
const Logo = ()=>{
    return(
<div className="logo">
        <img src={DubaiLogo} alt="dubai-logo" className="logo-img" />
        <div className="logo-text">
          <b>DUBAI</b>
          <b>DESERT</b>
          <b>SAFARI</b>
        </div>
      </div>
    )
}

export default Logo;