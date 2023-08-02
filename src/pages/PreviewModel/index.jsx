import React, { useState } from 'react';
import { HomePageWrapper } from './styled';
import { Button, Card } from 'antd';
import ModelPreViewer from '~/components/models';

const PreviewModel = () => {
  const [showStomach, setShowStomach] = useState(false);
  const [showComission, setShowComission] = useState(true);

  return (
    <HomePageWrapper>
      <Card>
        <Button
          type={showComission && 'primary'}
          className='mr-3'
          onClick={() => {
            setShowComission(true);
            setShowStomach(false);
          }}
        >
          Comission Model
        </Button>
        <Button
          type={showStomach && 'primary'}
          className='mr-3'
          onClick={() => {
            setShowStomach(true);
            setShowComission(false);
          }}
        >
          Stomatch Model
        </Button>
      </Card>

      <div className='w-full h-full'>``
        {showStomach && (
          <ModelPreViewer
            src={process.env.PUBLIC_URL + '/models/Stomach03.glb'}
            iosSrc={process.env.PUBLIC_URL + '/models/Stomach03.usdz'}
          />
        )}
        {showComission && (
          <ModelPreViewer
            src={process.env.PUBLIC_URL + '/models/comission_230717'}
            iosSrc={null}
          />
        )}
      </div>
    </HomePageWrapper>
  );
};

export default PreviewModel;
