import { LoginOutlined, SearchOutlined } from '@ant-design/icons';

const Appheader = () => {
  return (
    <div className='appheader'>
      <nav>
        {' '}
        <ul className='navbar'>
          <li>Home</li>
          <li>About Us</li>
          <li>For Businesses</li>
          <li>EV Chargers</li>
          <li>Portable PowerStation</li>
          <li>Contact Us</li>
          <li>
            <SearchOutlined />
          </li>
          <li>
            <LoginOutlined />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Appheader;
