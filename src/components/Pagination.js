import styles from "../_assets/css/modules/pagination.module.css";
import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { UserListAvatar, Rounded, ModalNext } from ".";
import { useFetch } from "../services/fetch/useFetch";
import { useRouter } from "next/router";

export const Pagination = ({ sliceItems, actions }) => {
    
    const router = useRouter()
    const [showModal, setModalShow] = useState(false);

    const { data: repo } = useFetch('/v1/users');

    const initialPerPage = 10

    const [ perPage, setItemsPerPage ] = useState(initialPerPage)
    const [ currentPage, setCurrentPage ] = useState(0)

    const pages = Math.ceil( repo?.length / perPage)

    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    const currentItems = repo?.slice(startIndex, endIndex)

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(!showModal);

    useEffect(() => {
        setCurrentPage(0)
    }, [perPage])

    return (
        <Fragment>
            
            { router.query.userId && (
                <ModalNext modalShow={showModal || router.query.userId} />
            ) }

            {repo?.length > 0 && (
                <div className="d-flex flex-wrap justify-content-center m-0 p-0 ">
                    <select 
                    style={{
                        marginRight: '.25em',
                        border: '1px solid #ddd',
                        borderRadius: '4px'
                    }}
                    className="custom-select" 
                    onChange={(e) => {
                        e.preventDefault()
                        setItemsPerPage(Number(e.target.value))
                    }}>
                        {repo?.length != perPage ? (
                            <Fragment>
                                <option defaultValue={perPage} selected={true}>{perPage}</option>
                                <option defaultValue={perPage * 2}>{perPage * 2}</option>
                                <option defaultValue={repo?.length}>{repo?.length}</option>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <option defaultValue={initialPerPage}>{initialPerPage}</option>
                                <option defaultValue={perPage} selected={true}>{perPage}</option>
                            </Fragment>
                        )}
                            
                    </select>
                    <nav>
                        <ul className={`pagination ${styles.paginationCustom}`}>
                            { repo?.length > perPage && ( Array.from(Array(pages), (item, index) => (
                                <li className="page-item">
                                    <a 
                                    className={index == currentPage ? `page-link active` : 'page-link'}
                                    href="#" 
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setCurrentPage(index)   
                                    }}
                                    >{index + 1}</a>
                                </li>
                            )) ) }

                            { repo?.length > perPage ? (
                                <li className="page-item">
                                    <a className="page-link" href="#">Próximo</a>
                                </li>
                            ) : (
                                <li className="page-item">Página 1 de 1</li>
                            )}
                        </ul>
                        
                    </nav>
                </div>
            )}
            
            <Rounded label="Listagem de clientes">
                { currentItems?.length > 0 ? currentItems?.map(user => (
                    <>
                        <UserListAvatar 
                        userId={user.id}
                        name={user.name} 
                        description={user.description}
                        color={user.backdrop_color == '' ? null : `#${user.backdrop_color}`}
                        actions={actions == undefined ? false : actions}
                        />
                    </>
                )) : (
                    <p className="small mt-4 text-center">Nenhum cliente foi cadastrado no sistema. <Link href='/clients/new'><a className="link">Clique para cadastrar</a></Link></p>
                ) }
            </Rounded>
        </Fragment>
    )
}