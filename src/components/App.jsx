import GlobalStyle from "./GlobalStyle";
import { Profile } from "./Profile/Profile";
import user from '../user.json';
import { Statistics } from "./Statistics/Statistics";
import data from '../data.json';
import { Friends } from "./Friends/Friends";
import friends from '../friends.json';
import { Transactions } from "./Transactions/Transactions";
import transactions from '../transactions.json';

// npm install --save prop-types
// npm i react-global-style

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <GlobalStyle />

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title='Upload stats'
        data={data}
      />

      <Friends
        friends={friends}
      />
      
      <Transactions
        transactions={transactions}
      />
      
    </div>
  );
};
