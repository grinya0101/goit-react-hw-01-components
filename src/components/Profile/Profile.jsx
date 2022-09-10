import css from 'components/Profile/Profile.module.css'
import PropTypes from 'prop-types';  

export const Profile = ({ username, tag , location , avatar }) => {
    return <div className={css.container}>
        
  <div className={css.description}>
    <img src={avatar} className={css.avatar} alt="User avatar" width="200px"/>
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>1000</span>
    </li>
    <li>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>2000</span>
    </li>
    <li>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>3000</span>
    </li>
  </ul>

        

  
    </div>  

    



}


  Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number
  })
}