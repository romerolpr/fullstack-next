import { LayoutStatic } from '../src/containers';
import { NextLink } from '../src/components';

const Custom404 = () => (
    <LayoutStatic breadcrumbLabel="404: Página não encontrada">
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