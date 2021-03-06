import React from 'react';
import styles from './index.less';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </div>
  );
};
