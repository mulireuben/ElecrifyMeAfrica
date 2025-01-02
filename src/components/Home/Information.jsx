import { Col, Row } from 'antd';
import evChargerImage from '../../assets/Dun gun AC EV Charger.jpg';

const products = [
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
  {
    key: '1',
    image: evChargerImage,
    title: 'EV Charger',
  },
];
const Information = () => {
  return (
    <div className=''>
      <h1 className='information__title'>
        Best-Selling EV Chargers and <br /> Portable Power Stations{' '}
      </h1>
      <div>
        <Row gutter={[16, 16]}>
          {products.map((product) => {
            return (
              <Col xs={24} sm={12} lg={6} key={product.key}>
                <div className='Items'>
                  <div className='image'>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Information;
