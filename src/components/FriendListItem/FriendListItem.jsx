import css from 'components/FriendListItem/FriendListItem.module.css'
  
  export const FriendListItem = ({isOnline, avatar, name, id}) => {
    return(
        <li kay={id} className={css.item} >
           <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
            <img className={css.avatar}  src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

