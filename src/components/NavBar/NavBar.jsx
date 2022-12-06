import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import  Nav  from 'react-bootstrap/Nav';
import SignUpForm from '../SignUpForm/SignUpForm';

export default function NavBar() {

    return (
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Write a review</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey={<SignUpForm />}>Sign up</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }


  
  
//   return (
//     <nav>
//       <div>
//         <p>Write a review</p>
//         <p>Events</p>
//         <p>Login</p>
//         <button className='button'>Sign Up</button>
//       </div>
//     </nav>
//   );
// }

