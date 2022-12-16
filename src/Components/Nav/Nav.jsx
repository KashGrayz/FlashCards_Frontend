import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar"

const Nav = () => {
    return (
        <NavBar fixed="top">
            <Container>
                <NavBar.Brand>FlashCards</NavBar.Brand>
            </Container>
        </NavBar>

    )
}
export default Nav;