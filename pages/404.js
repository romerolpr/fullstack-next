import { LayoutStatic } from '../src/containers';
import { NextLink } from '../src/components';

const Custom404 = () => (
    <LayoutStatic>
        <h2>404</h2>
        <p>Página não encontrada.</p>
        <ul className="ul-list">
            <li className="li-item">
                <NextLink href="/" label="Voltar para página inicial"/>
            </li>
        </ul>
    </LayoutStatic>
)

export default Custom404;