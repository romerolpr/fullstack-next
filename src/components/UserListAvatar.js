import { AvatarColor } from './';
import { Button } from 'react-bootstrap';
import styles from '../_assets/css/modules/userListAvatar.module.css';
import { useRouter } from 'next/router';

export const UserListAvatar = ({ userId, name, description, color, actions }) => {

    const router = useRouter()

    return (
        <div className="d-flex text-muted pt-3">
            <AvatarColor width={32} height={32} color={color}/>
            <p className="pb-3 mb-0 small lh-sm border-bottom" style={{ width: '100%' }}>
                <strong className="d-block text-gray-dark">{name}</strong>
                {description}
            </p>
            { actions && (
                <Button variant="primary" onClick={() => {
                    router.push({
                        query: {
                            userId: userId
                        }
                    })
                }} className={styles.buttonCustom}>
                    Editar cliente
                </Button>
            ) }
        </div>
    )
}