import React, { useState } from 'react';
import { ModelViewerWrapper } from './styled';
import { ICON_LEFT } from '~/assets/icons/left';
import { ICON_RIGHT } from '~/assets/icons/right';
import ModelsCommon from './components/ModelCommon';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '~/routes/route.constant';

const ModelViewer = () => {
  const navigate = useNavigate();
  const [itemSelected, setItemSelected] = useState(1);
  const listPathSrc = [
    process.env.PUBLIC_URL + '/models/comission_230717',
    process.env.PUBLIC_URL + '/models/Stomach03.glb',
    process.env.PUBLIC_URL + '/models/intestine.glb'
  ];

  const listPathIOS = [
    null,
    process.env.PUBLIC_URL + '/models/Stomach03.usdz',
    null
  ];

  return (
    <ModelViewerWrapper
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/HomeImg.png)`
      }}
    >
      {itemSelected === 1 && (
        <ModelsCommon
          src={listPathSrc[itemSelected]}
          iosSrc={listPathIOS[itemSelected]}
          action={null}
        />
      )}

      {itemSelected === 2 && (
        <ModelsCommon
          src={listPathSrc[itemSelected]}
          iosSrc={listPathIOS[itemSelected]}
          action={null}
        />
      )}

      <div className='slider'>
        <div className='slides justify-between'>
          <div
            className='box-arrow cursor-pointer'
            onClick={() => {
              if (itemSelected === 1) {
                navigate(ROUTE_PATH.INTRODUCE);
              } else {
                setItemSelected(1);
              }
            }}
          >
            <div className='arrow'>
              <ICON_LEFT />
            </div>
          </div>

          <div
            className='box-arrow cursor-pointer'
            onClick={() => {
              if (itemSelected === 1) {
                setItemSelected(2);
              } else {
                setItemSelected(2);
              }
            }}
          >
            <div className='arrow'>
              <ICON_RIGHT />
            </div>
          </div>
        </div>
      </div>
    </ModelViewerWrapper>
  );
};

export default ModelViewer;
