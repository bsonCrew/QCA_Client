import Dialog from '@mui/material/Dialog';
import linkify from '../utils/linkify';
import audits from '../../audits.json';

import styled from '@emotion/styled';

const AuditValueWrapper = styled.div({
  margin: '2vh 0 2vh 0',
});

const AuditLabel = ({ auditId }) => {
  const auditObj = audits.audits[auditId];
  let className = '';
  switch (auditObj.class) {
    case 'accessibility':
      className = '접근성';
      break;
    case 'connectivity':
      className = '접속성';
      break;
    case 'compatibility':
      className = '호환성';
      break;
    case 'openness':
      className = '개방성';
      break;
    default:
      className = '';
  }
  return (
    <div className='mt-1 text-lg font-bold text-blue'>
      {[className, auditObj.subClass, auditObj.spec, auditId].join(' > ')}
    </div>
  );
};

export default function DataCardModal(props) {
  let description = props.description?.replace(props.subheader, '');
  console.log(props.item);

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      fullWidth
      maxWidth='lg'
    >
      <div className='w-fit h-100 p-12'>
        <span className='text-xl font-bold'>{props.title}</span>
        <AuditLabel auditId={props.id} />
        <div className='mt-4 py-6 text-lg pt-4 leading-8'>
          {props.subheader}
          {props.item.displayValue ? (
            <AuditValueWrapper>
              측정된 데이터는 다음과 같습니다: {props.item.displayValue}
            </AuditValueWrapper>
          ) : null}

          <br />
          {linkify(description)}
        </div>
      </div>
    </Dialog>
  );
}
