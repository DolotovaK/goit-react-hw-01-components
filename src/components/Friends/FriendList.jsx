import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'

export function FriendList({ friends }) {
    return (
    <>
        <ul>
            {friends.map(friend => (
            <li key={friend.id}>
            <FriendListItem friend={ friend} />
    </li>
))}
            
    </ul>
    </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}
