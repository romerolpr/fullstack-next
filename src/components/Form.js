import { Button, Form } from 'react-bootstrap';

export const FormNext = () => {
    return (
        <Form>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Insira o nome do cliente" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="Insira o e-mail do cliente" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCpf">
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="Insira o cpf do cliente" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCpf">
                <Form.Label>Descrição</Form.Label>
                <Form.Control type="texta" placeholder="Insira a descrição do cliente" />
            </Form.Group>

        </Form>
    )
}