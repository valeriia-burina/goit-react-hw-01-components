import React from 'react';
import PropTypes from 'prop-types';
import css from './Friends.module.css';


export const Friends = ({ friends }) => (
  <div><h1 className={css.friends_title}>Friends</h1>
    <ul className={css.friends_friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friends_item}>
          {friend.isOnline === true ? (
            <span className={`${css.friends_status} ${css.friends_statusOnline}`}></span>
          ) : (
            <span className={`${css.friends_status} ${css.friends_statusOffline}`}></span>
          )}
          <img
            className={css.friends_avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.friends_name}>{friend.name} </p>
        </li>
      ))}
    </ul>
    </div>
);

Friends.propTypes = {
    friends:
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.oneOf([true, false]).isRequired,
        })).isRequired,
};