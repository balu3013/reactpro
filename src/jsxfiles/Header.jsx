import '../css/style.css';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <>
        <div className="header">
            <header>
                <nav>
                    <ul>
                        <Link to='/home'><li>Home</li></Link>
                        <Link to='/about_us'><li>About us</li></Link>
                        <Link to='/contact'><li>Contact us</li></Link>
                        <Link to='/login'><li>Login</li></Link>
                        <Link to='/signup'><li>Sign up</li></Link>                    
                    </ul>
                </nav>
            </header>
        </div>

        <Link to='/login'><button>Click</button></Link>

</>
    )
}

