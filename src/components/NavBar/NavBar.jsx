import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  // function handleLogOut() {
  //   userService.logOut();
  //   setUser(null);
  // }

  return (
    <nav>
      <div>
        <p>Write a review</p>
        <p>Events</p>
        <p>Login</p>
        <button className='button'>Sign Up</button>
      </div>
    </nav>
  );
}

{/* <Link to='/orders'>Order History</Link>
&nbsp; | &nbsp;
<Link to='/orders/new'>New Order</Link>
&nbsp; | &nbsp;
Welcome, {user.name}
&nbsp; | &nbsp;
<Link to='' onClick={handleLogOut}>Log Out</Link> */}