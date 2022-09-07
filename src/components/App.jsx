import {Profile} from 'components/Profile/Profile'
import user from 'components/Profile/user.json'

export const App = () => {
  return (
    <div className='profile'>
 <Profile avatar={user.avatar} username={user.username} tag={user.tag}  location={user.location} stats={user.stats} />
    </div>
  );
};
