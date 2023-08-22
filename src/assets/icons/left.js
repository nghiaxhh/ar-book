export const ICON_LEFT = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + '/images/20.png'}
      alt=''
      width={'80px'}
    />
  );
};

export const IconNextMessage = () => {
  return (
    <img src={process.env.PUBLIC_URL + '/images/3.png'} alt='' width={'80px'} />
  );
};

export const IconNextStage = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + '/images/10.png'}
      alt=''
      width={'80px'}
    />
  );
};

export const IconPreviousStage = () => {
  return (
    <img
      style={{ transform: 'rotate(180deg)' }}
      src={process.env.PUBLIC_URL + '/images/10.png'}
      alt=''
      width={'80px'}
    />
  );
};
