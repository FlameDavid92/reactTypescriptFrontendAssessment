import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Price } from '../../model/interfaces';
import { printPrice } from '../../utils/price';
import cn from 'classnames';
import scss from './footer.module.scss';

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
      setCurrentSectionId(n=>n+1);
    } else alert("Under development!");
  }
  return (
    <footer className={scss.footer}>
      <div className={cn("row justify-content-between align-items-center m-0 pt-3 pb-3", scss.myTopShadow)}>
        <div className="col-6 col-lg-2">
          <div className="row">
            <div className="col-12"><div className={cn("mb-0", scss.myLabel)}>Total</div></div>
            <div className="col-12"><div className={scss.divTotal}>{total.currency + printPrice(total.value)}</div></div>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <button className={scss.myButton} onClick={() => onBtnFooterClick()}>
            <div className="row">
              <div className="col">{nextSectionString}</div>
              <div className="col"><FontAwesomeIcon icon={faAngleRight} /></div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}