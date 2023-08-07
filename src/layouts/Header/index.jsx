import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZE } from '~/common/constants';
import { LayoutCommon } from '~/styles/genaralStyled';
import NavPanel from './NavPanel';
import Tippy from '@tippyjs/react';
import { useSpring, motion } from 'framer-motion';

const springConfig = { damping: 15, stiffness: 300 };
const initialScale = 0.9;

const Header = () => {
  const opacity = useSpring(0, springConfig);
  const scale = useSpring(initialScale, springConfig);
  const [visible, setVisible] = useState(false);

  const isMobile = useMediaQuery({ query: SCREEN_SIZE.TABLET });

  const show = () => {
    scale.set(1);
    opacity.set(1);
    setVisible(true);
  };

  const hide = () => {
    const cleanup = scale.onChange((value) => {
      if (value <= initialScale) {
        cleanup();
      }
    });
    scale.set(initialScale);
    opacity.set(0);
    setVisible(false);
  };

  return (
    <LayoutCommon>
      <div className='d-flex justify-between items-center h-[80px]'>
        <div className=' text-logo text-logo-blue'>LOGO</div>

        {!isMobile && (
          <>
            <div className='select-option'>
              <div className='text-option'>Trending</div>
              <div className='text-option'>Latest</div>
              <div className='text-option'>Popular</div>
              <div className='text-option'>History</div>
              <div className='text-option'>Science</div>
            </div>

            <Input
              placeholder='search'
              suffix={<SearchOutlined />}
              allowClear
              style={{
                width: 400,
                height: '40px'
              }}
            />
          </>
        )}

        {isMobile && (
          <>
            <div className='flex justify-center	items-center'>
              <Tippy
                onClickOutside={hide}
                interactive={true}
                visible={visible}
                animation={true}
                content={
                  <motion.div
                    className='w-72 overscroll-auto'
                    style={{ scale, opacity }}
                  >
                    <Input
                      placeholder='search'
                      suffix={<SearchOutlined />}
                      allowClear
                      style={{
                        width: 'auto',
                        height: '40px'
                      }}
                    />
                  </motion.div>
                }
              >
                <SearchOutlined className='mr-3' onClick={show} />
              </Tippy>

              <NavPanel />
            </div>
          </>
        )}
      </div>
    </LayoutCommon>
  );
};

export default Header;
