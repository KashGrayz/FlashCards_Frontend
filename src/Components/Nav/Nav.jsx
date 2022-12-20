import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar"
import '../Nav/Nav.css'
const Nav = () => {
    return (
    
        <NavBar fixed="top">
            <Container>
                <NavBar.Brand><h1><span className="flash"><b>Flash</b></span><b>Cards</b></h1></NavBar.Brand>
            </Container>
        </NavBar>

    )
}
export default Nav;      