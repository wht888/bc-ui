import { Modal } from 'antd';
import styles from './index.less';

export default (props: any) => {
  const { children, visible, handleOk, handleCancel, large, title = '标题' } = props;
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={large ? '896px' : '640px'}
      centered
    >
      <div className={styles.modelInner}>{children}</div>
    </Modal>
  );
};
