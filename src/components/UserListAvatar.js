import { AvatarColor } from './';
import { Button } from 'react-bootstrap';
import styles from '../_assets/css/modules/userListAvatar.module.css';
import { useRouter } from 'next/router';

export const UserListAvatar = ({ userId, name, description, color, lastUpdate, actions }) => {

    const router = useRouter()

    const formatDate = (fir, sec) => {
        return parseInt(sec.toLocaleDateString().replace('-', '')) - parseInt(fir.toLocaleDateString().replace('-', ''))
    }

    const checkDate = (date) => {

        const formated = new Date(date)
        const today = new Date()

        switch (formatDate(formated, today)) {
            case 0:
                return 'Today';
            case 1:
                return 'Yesterday';
            default:
                return formated.toLocaleDateString()
        }
    }

    return (
        <div className="d-flex text-muted pt-3">
            <AvatarColor width={32} height={32} color={color}/>
            <p className="pb-3 mb-0 small lh-sm " style={{ width: '100%' }}>
                <strong className="d-block text-gray-dark">{name} - {checkDate(lastUpdate)}</strong>
                {description}
            </p>
            { actions && (
                <Button variant="primary" onClick={() => {
                    router.push({
                        pathname: `/clients/edit/userId/${userId}`
                    })
                }} className={styles.buttonCustom}>
                    Editar
                </Button>
            ) }
        </div>
    )
}