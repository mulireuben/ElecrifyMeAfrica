import { Card, Carousel, Col, Row } from 'antd';
import caseroul1 from '../../assets/images/caseroul1.jpeg';
import cASEROUL2 from '../../assets/images/cASEROUL2.jpeg';

const Couserol = () => {
  return (
    <div className='container'>
      {' '}
      <div className='caseroulBlock'>
        <Row>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Carousel autoplay autoplaySpeed={1500}>
              <div>
                <img
                  className='image1'
                  src={caseroul1}
                  alt='banner1'
                  sizes='large'
                />
              </div>
              <div>
                <img src={cASEROUL2.jpeg} alt='banner2' />
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row gutter={[25, 25]}>
          <Col span={(12, 12)}>
            <Card size='large' className='card'></Card>
          </Col>
          <Col span={(12, 12)}>
            <Card size='large' className='card'></Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Couserol;
