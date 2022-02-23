import { Button, Modal, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useFetch } from '../services/fetch/useFetch';

export const ModalNext = ({ modalShow }) => {
    
    const router = useRouter()
    const { data: user } = useFetch(`/v1/users/${router.query.userId}`)

    const handleClose = () => {
        router.push({ query: null })
        toast.success('Modificações salvas.')
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
            <Modal.Title>{`#${user?.id} ${user?.name}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control defaultValue={user?.name} type="text" placeholder="Insira o nome do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control defaultValue={user?.email} type="email" placeholder="Insira o e-mail do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control defaultValue={user?.address} type="text" placeholder="Insira o endereço do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control defaultValue={user?.cpf} type="text" placeholder="Insira o cpf do cliente" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control defaultValue={user?.description} type="texta" placeholder="Insira a descrição do cliente" />
                    </Form.Group>

                </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={() => handleClose()}>
                Deletar
            </Button>
            <Button variant="primary" onClick={() => handleClose()}>Salvar</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}