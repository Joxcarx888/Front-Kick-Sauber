import logo from '../assets/img/logo.jpg';

export const Logo = ({text}) => {
    return(
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Escudo Sauber"/>
            <span></span>
        </div>
    )
}