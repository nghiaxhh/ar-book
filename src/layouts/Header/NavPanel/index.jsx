import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export function NavPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const showDrawer = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <MenuOutlined onClick={showDrawer} className='nav-icon mr-0' />
      <Drawer
        title={'Menu'}
        placement={'right'}
        width={350}
        onClose={onClose}
        open={isVisible}
      >
        <div className='text-option font-bold pb-3'>Trending</div>
        <div className='text-option font-bold pb-3'>Latest</div>
        <div className='text-option font-bold pb-3'>Popular</div>
        <div className='text-option font-bold pb-3'>History</div>
        <div className='text-option font-bold pb-3'>Science</div>
      </Drawer>
    </>
  );
}

export default NavPanel;
