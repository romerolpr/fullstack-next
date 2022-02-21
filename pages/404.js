import { LayoutStatic } from '../src/containers';
import { NextLink } from '../src/components';

import Link from 'next/link';

const Custom404 = () => (
    <LayoutStatic>

        <div className="file-navigation mb-3 d-flex flex-items-start mt-3">
            <div className="flex-1 mx-2 flex-self-center f4">
            <div className="d-none d-sm-block">
                <span className="text-bold">
                <span className="d-inline-block wb-break-all">
                    <Link href={"/"}>
                    <a title="fullstack-next" className="link">fullstack-next</a>
                    </Link>
                </span>
                </span>
                <span className="mx-1">/</span><strong className="final-path">404: Página não encontrada</strong><span className="mx-1">/</span>
            </div>
            </div>
        </div>

        <h2>Oops! Não foi possível encontrar a página.</h2>
        <p>404: Página não encontrada.</p>
        <ul className="ul-list">
            <li className="li-item">
                <NextLink href="/" label="Voltar para página inicial"/>
            </li>
        </ul>
    </LayoutStatic>
)

export default Custom404;