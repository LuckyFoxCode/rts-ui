import { Icon } from 'ui';
import './IconPage.scss';

export const IconPage = () => {
  return (
    <div className='IconPage'>
      <h2>Icon</h2>
      <Icon
        name='IconPdf'
        size={35}
      />
    </div>
  );
};
