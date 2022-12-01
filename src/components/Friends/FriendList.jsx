import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem'
import css from '../Friends/Friend.module.css'

export function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
            <FriendListItem friend={ friend} />
    </li>
))}
            
    </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}
