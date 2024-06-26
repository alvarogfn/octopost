import { ReactNode } from 'react';

import Button from '~components/Button/Button';

import scss from './ActionBar.module.scss';

function ActionBar(): ReactNode {
  return (
    <div className={scss.container}>
      <Button className={scss.submit} variant="container">
        Postar
      </Button>
    </div>
  );
}

export default ActionBar;
