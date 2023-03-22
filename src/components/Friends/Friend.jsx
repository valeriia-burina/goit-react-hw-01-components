import css from './Friends.module.css';

export const Friend = ({ friend }) => (
  <div>
    <li key={friend.id} className={css.friends_item}>
          {friend.isOnline ? 
            <span className={`${css.friends_status} ${css.friends_statusOnline}`}></span>
            : <span className={`${css.friends_status} ${css.friends_statusOffline}`}></span>
          }
          <img
            className={css.friends_avatar}
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className={css.friends_name}>{friend.name} </p>
        </li>
  </div>
)