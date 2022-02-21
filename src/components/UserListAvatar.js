import { AvatarColor } from './';

export const UserListAvatar = ({ name, description, color }) => (
    <div className="d-flex text-muted pt-3">
        <AvatarColor width={32} height={32} color={color}/>
        <p className="pb-3 mb-0 small lh-sm border-bottom" style={{ width: '100%' }}>
            <strong className="d-block text-gray-dark">{name}</strong>
            {description}
        </p>
    </div>
)