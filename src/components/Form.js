import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiService } from '../services'

export const FormNext = () => {

    const router = useRouter()

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nome de usuário é obrigatório.'),
        email: Yup.string()
        .required('E-mail é obrigatório.')
        .email('Informe um e-mail válido.'),
        address: Yup.string()
        .required('Endereço é obrigatório.'),
        cpf: Yup.string()
        .required('E-mail é obrigatório.'),
        description: Yup.string()
        .required('Descrição é obrigatório.')
    });
    
    const formOptions = { resolver: yupResolver(validationSchema) }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions)

    const { errors, isSubmitting } = formState

    const onSubmit = async ( data ) => {

        // set new order to send
        const send = {
            name: data.name,
            cpf: data.cpf,
            email: data.email,
            address: data.address,
            description: data.description,
            backdrop: data.backdrop
        }   

        if ( apiService.register(send) ) {
            toast.success('O cliente foi cadastrado')
            reset()
        }

    }

    return (
        <div className="row pt-3">
            <div className="col-lg-6 col-sm-12 pb-3">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} type="text" placeholder="Insira o nome do cliente" />
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} type="email" placeholder="Insira o e-mail do cliente" />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control {...register('address')} className={`form-control ${errors.address ? 'is-invalid' : ''}`} type="text" placeholder="Insira o endereço do cliente" />
                        <div className="invalid-feedback">{errors.address?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control {...register('cpf')} className={`form-control ${errors.cpf ? 'is-invalid' : ''}`} type="text" placeholder="Insira o cpf do cliente" />
                        <div className="invalid-feedback">{errors.cpf?.message}</div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control {...register('description')} className={`form-control ${errors.description ? 'is-invalid' : ''}`} type="texta" placeholder="Insira a descrição do cliente" />
                        <div className="invalid-feedback">{errors.description?.message}</div>
                    </Form.Group>
                </Form>
                <div className="col-md-12 d-md-inline-flex flex-row justify-content-end">
                    <Button variant="primary" onClick={handleSubmit(onSubmit)}>
                        Cadastrar cliente
                    </Button>
                </div>
            </div>

        </div>
    )
}