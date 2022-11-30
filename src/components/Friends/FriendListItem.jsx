import PropTypes from 'prop-types';

export function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
         <>
        <img src={avatar} alt={name} />
        <p>{name}</p>
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