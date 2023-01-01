import webIcon from '../assets/WebIcon.png';

export default function NavBar() {
    return (
        <nav className="navBar">
            <img className="navBar--icon" src={webIcon} alt="header icon" />
            <span className="navBar--title">my travel journal</span>
        </nav>
    );
}
