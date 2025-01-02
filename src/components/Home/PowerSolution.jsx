import { Card, Col, Row } from 'antd';

const PowerSolution = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Power Solutions For Every Need </h1>
      <div>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} lg={12}>
            {' '}
            <Card className='cardy' />
          </Col>
          <Col xs={24} sm={24} lg={12}>
            <Card className='cardy' />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PowerSolution;
