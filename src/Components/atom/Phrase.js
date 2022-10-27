import { HBlue, H3Gray } from '../../Themes/CustomStyled';

const Phrase = ({ title, subtitle }) => {
  return (
    <div className='w-full flex flex-col'>
      <HBlue>{title}</HBlue>
      <H3Gray>{subtitle}</H3Gray>
    </div>
  );
};

export default Phrase;
