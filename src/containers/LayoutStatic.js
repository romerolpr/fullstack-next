import Head from "next/head";
import NextNprogress from 'nextjs-progressbar';

import { Fragment } from "react";
import { Breadcrumb } from "../components";
import { Navbar, Container } from ".";

import { ToastContainer } from "react-toastify";

export const LayoutStatic = ({ children, breadcrumbLabel }) => (
    <Fragment>
        <Head>
            <title>{breadcrumbLabel}</title>
        </Head>
        <Navbar />
        <NextNprogress
            color="#29D"
            startPosition={0.3}
            stopDelayMs={200}
            height={1.25}
            showOnShallow={true}
        />
        <ToastContainer />
        <Container>
            <Breadcrumb label={breadcrumbLabel}/>
            { children }
        </Container>
    </Fragment>
)