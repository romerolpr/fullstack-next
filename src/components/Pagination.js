import styles from "../_assets/css/modules/pagination.module.css";
import { useState, Fragment, useEffect } from "react";
import Link from "next/link";
import { UserListAvatar, Rounded, ModalNext } from ".";
import { useFetch } from "../services/fetch/useFetch";

import { useRouter } from "next/router";

import ContentLoader from "react-content-loader";

export const Pagination = ({ slice, reverse, actions }) => {
    
    const router = useRouter()

    const { data: repo } = useFetch('/v1/users')

    const initialPerPage = 10

    const [ perPage, setItemsPerPage ] = useState(initialPerPage)
    const [ currentPage, setCurrentPage ] = useState(0)

    const pages = Math.ceil( repo?.length / perPage)

    const startIndex = currentPage * perPage;
    const endIndex = startIndex + perPage;

    const currentItems = repo?.slice(startIndex, endIndex)
    const hrefPage = router.query.page

    const handlePage = (page) => {
        setCurrentPage(page)
        const query = page > 0 ? { page: page } : null
        router.push({
            query: query
        })
    }

    useEffect(() => {
        
        if (hrefPage) {
            setCurrentPage(hrefPage)
        } else {
            setCurrentPage(0)
        }
        
    }, [perPage])

    useEffect(() => {
        // limpa states
        return () => {
            setItemsPerPage(initialPerPage)
        }
    }, [])

    if (repo == null) {

        return (
            <ContentLoader 
                speed={2}
                viewBox="0 0 400 130"
                backgroundColor="#f0f0f0"
                foregroundColor="#ddd"
            >
                <rect x="0" y="10" rx="2" ry="2" width="150" height="12" /> 
                <rect x="0" y="30" rx="2" ry="2" width="340" height="30" /> 
                <rect x="380" y="30" rx="2" ry="2" width="20" height="30" /> 
                <rect x="0" y="68" rx="2" ry="2" width="320" height="30" /> 
                <rect x="380" y="68" rx="2" ry="2" width="20" height="30" /> 
            </ContentLoader>
        )
    }

    return (
        <Fragment>

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
                                        handlePage(index) 
                                    }}
                                    >{index + 1}</a>
                                </li>
                            )) ) }

                            { repo?.length > perPage ? (
                                <li className="page-item">
                                    <a className="page-link" href="#" onClick={(e) => {
                                        e.preventDefault()
                                        const newPage = currentPage + 1
                                        let countPages = 0;
                                        Array.from(Array(pages), () => {
                                            countPages++;
                                        })
                                        if (newPage < countPages) {
                                            handlePage(newPage)
                                            router.push({ query: { page: newPage } })
                                        }
                                    } }>Próximo</a>
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
                        lastUpdate={user.last_update}
                        description={user.description}
                        color={user.backdrop_color == '' ? null : `#${user.backdrop_color}`}
                        actions={actions == undefined ? false : actions}
                        />
                    </>
                )) : (
                    <p className="small mt-4 text-center">{!repo?.length ? 'Nenhum cliente foi cadastrado no sistema.' : 'Nenhum cliente foi encontrado nessa página.'} <Link href='/clients/new'><a className="link">Clique para cadastrar</a></Link></p>
                ) }
            </Rounded>
        </Fragment>
    )
}