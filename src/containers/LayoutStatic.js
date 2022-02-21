import { Fragment } from "react";
import { Navbar, Container } from ".";

export const LayoutStatic = ({ children }) => (
    <Fragment>
        <Navbar />
        <Container>
            { children }
        </Container>
    </Fragment>
)