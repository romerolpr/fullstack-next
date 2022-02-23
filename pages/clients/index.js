import { LayoutStatic } from "../../src/containers";
import { Pagination } from "../../src/components";

const Clients = () => {

    return (
        <LayoutStatic breadcrumbLabel="Listagem de clientes">
            <Pagination/>
        </LayoutStatic>
    )

}

export default Clients;