import { Button, Modal, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { apiService } from '../services';
import { useFetch } from '../services/fetch/useFetch';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const ModalNext = ({ modalShow, id }) => {
    
    const router = useRouter()
    const { data: user } = useFetch(`/v1/users`)
    const userData = user?.find(u => u.id == id)

    const handleClose = () => {
        router.push({ pathname: '/clients/edit', query: null })
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nome de usuário é obrigatório.'),
        email: Yup.string()
        .required('E-mail é obrigatório.')
        .email('Informe um e-mail válido.'),
        address: Yup.string()
        .required('Endereço é obrigatório.'),
        cpf: Yup.string()
        .required('CPF é obrigatório.'),
        description: Yup.string()
        .required('Descrição é obrigatório.')
    });
    
    const formOptions = { resolver: yupResolver(validationSchema) }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, setError, formState } = useForm(formOptions)

    const { errors, isSubmitting } = formState

    const onSubmit = async ( data ) => {

        // set new order to send
        const send = {
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            address: data.address,
            description: data.description,
        }   

        if ( apiService.update(userData?.id, send) ) {
            toast.success('O cliente foi alterado')
        }

        // console.log(data)
    }

    return (
        <>
        <Modal
            show={modalShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{`#${userData?.id} ${userData?.name}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} defaultValue={userData?.name} type="text" placeholder="Insira o nome do cliente" />
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} defaultValue={userData?.email} type="email" placeholder="Insira o e-mail do cliente" />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} defaultValue={userData?.address} type="text" placeholder="Insira o endereço do cliente" />
                        <div className="invalid-feedback">{errors.address?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control {...register('cpf')} className={`form-control ${errors.cpf ? 'is-invalid' : ''}`} defaultValue={userData?.cpf} type="text" placeholder="Insira o cpf do cliente" />
                        <div className="invalid-feedback">{errors.cpf?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control {...register('description')} className={`form-control ${errors.description ? 'is-invalid' : ''}`} defaultValue={userData?.description} type="texta" placeholder="Insira a descrição do cliente" />
                        <div className="invalid-feedback">{errors.description?.message}</div>
                    </Form.Group>

                </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
                Cancelar
            </Button>
            {/* <Button variant="danger" onClick={() => handleClose()}>
                Deletar
            </Button> */}
            <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                Salvar
            </Button>
            
            </Modal.Footer>
        </Modal>
        </>
    )
}