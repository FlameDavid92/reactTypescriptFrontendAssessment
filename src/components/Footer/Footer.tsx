import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Price } from '../../model/interfaces';
import { printPrice } from '../../utils/price';
import cn from 'classnames';
import scss from './footer.module.scss';

import {check} from '../../utils/checkModelSelection';

type FooterProps = {
  total: Price,
  limit: number,
  currentSectionId: number,
  setCurrentSectionId: React.Dispatch<React.SetStateAction<number>>
  nextSectionString: string,
};
export default function Footer({ total, limit, currentSectionId, setCurrentSectionId, nextSectionString }: FooterProps) {
  const onBtnFooterClick = () => {
    if (currentSectionId+1 < limit) {
      if(check()) setCurrentSectionId(n=>n+1);
      else alert("Seleziona un prodotto!");
    } else alert("Under development!");
  }
  return (
    <footer className={scss.footer}>
      <div className={cn("row justify-content-between align-items-center m-0 pt-3 pb-3", scss.myTopShadow)}>
        <div className="col-6 col-lg-2">
          <div className="row">
            <div className="col-12"><div className="mb-0 myLabel">Total</div></div>
            <div className="col-12"><div className={scss.total}>{total.currency + printPrice(total.value)}</div></div>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <button className={scss.myButton} onClick={() => onBtnFooterClick()}>
            <div className="row">
              <div className="col-8">{nextSectionString}</div>
              <div className="col-2"><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}