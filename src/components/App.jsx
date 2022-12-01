import { Profile } from "./Profile/Profile";
import user from "../data/user.json"
import { StatisticList } from "./Statistics/StatisticList";
import data from "../data/data.json"
import { FriendList } from "./Friends/FriendList";
import friends from "../data/friends.json"
import { TransactionHistory } from "./Transactions/TransactionHistory";
import transactions from "../data/transactions.json"

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <StatisticList stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

