import { LayoutStatic } from "../../../src/containers";
import { Pagination } from "../../../src/components";

const New = () => {

    return (
        <LayoutStatic breadcrumbLabel="Editar cliente existente">
            <Pagination actions={true}/>
        </LayoutStatic>
    )

}

export default New;