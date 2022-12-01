import PropTypes from 'prop-types';
import css from '../Friends/Friend.module.css'

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <>
        <span className={isOnline ? css.online : css.offline}></span>
        <img src={avatar} alt={name} width="50" />
        <p className={css.name}>{name}</p>
    </>
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
}