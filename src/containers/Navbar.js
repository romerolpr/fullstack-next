import { Container } from './';
import { NavbarCollapse, NextLink } from '../components';

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        <Container fluid={true}>
            <NextLink href="/" label="Fullstack Developer Tester" className="navbar-brand" />
            <button className="navbar-toggler p-0 border-0" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavbarCollapse />
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar por cliente..." />
                <button className="btn btn-light" type="submit">Buscar</button>
            </form>
        </Container>
    </nav>
)