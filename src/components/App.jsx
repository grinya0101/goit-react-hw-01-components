import {Profile} from 'components/Profile/Profile'
import user from 'components/Profile/user.json'
import {Statistics} from 'components_02/Statistics/Statistics'
import data from 'components_02/Statistics/data.json'
import {FriendList} from 'components/FriendList/FriendList'
import friends from 'components/FriendList/friends.json'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import transactions from 'components/TransactionHistory/transactions.json'


export const App = () => {
  return (
    <div className='profile'>
 <Profile avatar={user.avatar} username={user.username} tag={user.tag}  location={user.location} stats={user.stats} />;
 <Statistics data={data}/>;
 <FriendList friends={friends} />;
 <TransactionHistory items={transactions} />;
    </div>
    
  );
};
