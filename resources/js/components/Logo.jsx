import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <Link to="/" className="logo" aria-label="7411 Studio — home">
            <img src="/images/7411.png" alt="7411 Studio" className="logo__img" />
        </Link>
    );
}
