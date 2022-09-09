import {FriendListItem} from 'components/FriendListItem/FriendListItem'
import css from 'components/FriendListItem/FriendListItem.module.css'

  export const FriendList = ({ friends }) => {
   
    return(
        <ul className={css.friendList}>
            {friends.map(({id, isOnline, name, avatar}) => <FriendListItem key={id} isOnline={isOnline} name={name} avatar={avatar}/>)}
        </ul>
    )
  };


