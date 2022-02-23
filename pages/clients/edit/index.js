import { LayoutStatic } from "../../../src/containers";
import { UserListAvatar, Rounded, Pagination } from "../../../src/components";
import { useFetch } from "../../../src/services/fetch/useFetch";

const Update = () => {

    const { data: repo } = useFetch('/v1/users');

    return (
        <LayoutStatic breadcrumbLabel="Editar cliente existente">
            <div className="d-flex justify-content-center m-0 p-0">
                <Pagination />
            </div>
            <Rounded label="Exibindo listagens dos clientes">
                { repo?.map(user => (
                    <UserListAvatar 
                    name={user.name} 
                    description={user.description}
                    color={user.backdrop_color == '' ? null : `#${user.backdrop_color}`}
                    actions={true}
                    />
                )) }
                
            </Rounded>
        </LayoutStatic>
    )

}

export default Update;