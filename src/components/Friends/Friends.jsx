import React from 'react';
import PropTypes from 'prop-types';
import css from './Friends.module.css';
import { Friend } from './Friend';


export const Friends = ({ friends }) => (
  <div><h1 className={css.friends_title}>Friends</h1>
    <ul className={css.friends_friendList}>
      {friends.map(friend => (
        <Friend friend={friend} />
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
