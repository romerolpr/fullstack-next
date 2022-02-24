import { LayoutStatic } from "../../../../src/containers";
import { ModalNext, Pagination } from "../../../../src/components";
import { useRouter } from "next/router";

const Edit = () => {

    const router = useRouter()
    const { id } = router?.query

    console.log(id)

    return (    
        <LayoutStatic breadcrumbLabel="Editar cliente existente">
            { id != undefined && (
                <ModalNext modalShow={ true } id={ id } />
            ) }
            <Pagination actions={true}/>
        </LayoutStatic>
    )

}

export default Edit;