import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/');
  }, []);

  return <div className='NotFound'>team Bson을 사랑해주셔서 감사합니다.</div>;
}
export default NotFound;
