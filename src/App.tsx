import s from './App.module.css';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { UserCard } from './components/UserCard/UserCard';
import { IUser } from './models';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CardOverlay from './components/CardOverlay/CardOverlay';

function fetchUsers() {
  return axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users').then((response) => response.data);
};

function App() {

  // users
  let [users, setUsers] = useState<IUser[]>([]);

  // current user card id
  const [cardUserId, setCardUserId] = useState();

  // search input value
  const [searchTerm, setSearchTerm] = useState('');

  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetchUsers().then((users) => setUsers(users))
  }, [])

  const sortedUsers = useMemo(() => {
    return users;
  }, [users, isSorted]);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) {
      return sortedUsers;
    }
    return sortedUsers.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }, [sortedUsers, searchTerm])

  // Card button - Show Posts
  const buttonPressed = (currentUserId) => {
    if (currentUserId !== cardUserId) {
      setCardUserId(currentUserId);
    }
  }

  const sortByLetter = () => {
    setIsSorted(!isSorted);
    let sortedUsersByLetter = filteredUsers.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      }else if (a.name < b.name) {
        return -1
      }
      return 0
    })
    setUsers(sortedUsersByLetter)
  }

  return (
    <div className={s.App}>
      <div className={s.container}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} sortByLetter={sortByLetter} />
        {/* /Header */}
        <main className={s.main}>
          <div className={`${cardUserId ? s.card_wrapper__smaller : s.card_wrapper}`}>
            {
              filteredUsers.map((user) => <UserCard userItem={user} key={user.id} buttonPressed={buttonPressed} cardUserId={cardUserId} />)
            }
          </div>
          <CardOverlay cardUserId={cardUserId} />
        </main>
        {/* /Main */}
        <Footer />
        {/* /Footer */}
      </div>
    </div>
  );
}

export default App;
