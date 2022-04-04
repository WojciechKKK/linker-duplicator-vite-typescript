import DetailsStyled from './DetailsStyled';
import Button from '../Button/Button';
import React, { Suspense, useState } from 'react';
import Loader from '../Loader/Loader';
import { FunctionComponent } from 'react';
import * as translations from '../../../data/translate.json';

const PopupDetails = React.lazy(() => import('./PopupDetails/PopupDetails'));

type DetailsProps = {
  duplicateElements: string[]
};

const Details: FunctionComponent<DetailsProps> = ({ duplicateElements }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <DetailsStyled>
      <Button 
        text={translations.button.info} 
        infoBtn={true}
        fnClick={() => setVisiblePopup(true)} 
      />
      { visiblePopup && (
        <Suspense fallback={<Loader />}>
          <PopupDetails
            fnClose={() => setVisiblePopup(false)}
            values={duplicateElements}
          />
        </Suspense>
      )}
    </DetailsStyled>
  )
}

export default Details;