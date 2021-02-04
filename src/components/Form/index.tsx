import { Form, Input, Row, Col } from 'antd';

export default (props: any) => {
  const { large } = props;
  const arr: any = Array.from({ length: 10 }).fill(123);
  return (
    <Form
      labelCol={{ span: large ? 24 : 6 }}
      wrapperCol={{ span: large ? 24 : 14 }}
      layout={large ? 'vertical' : 'horizontal'}
    >
      <Row gutter={large ? 48 : 16}>
        {arr.map(() => (
          <Col span={large ? 12 : 24}>
            <Form.Item label="其他已提供资料补充充">
              <Input />
            </Form.Item>
          </Col>
        ))}
      </Row>
    </Form>
  );
};
