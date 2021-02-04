import { Row, Col } from 'antd';

interface Props {
  large?: boolean;
  arr?: object[];
}
export default (props: Props) => {
  const { large, arr = [] } = props;
  return (
    <div>
      <Row gutter={large ? 48 : 16}>
        {arr.map((item: any) => (
          <Col span={large ? 12 : 24} style={{ marginBottom: '16px' }}>
            <label style={{ marginRight: '8px' }}>{item.label}:</label> <span>{item.value}</span>
          </Col>
        ))}
      </Row>
    </div>
  );
};
