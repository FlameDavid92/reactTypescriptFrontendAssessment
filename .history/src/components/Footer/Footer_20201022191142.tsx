import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Price } from '../../model/interfaces';
import { printPrice } from '../../utils/price';
import cn from 'classnames';
import scss from './footer.module.scss';

type FooterProps = {
  total: Price,
  nextSectionString: string,
  nextSectionIndex: number,
  limit: number,
  currentSectionId: number,
  setCurrentSectionId: React.Dispatch<React.SetStateAction<number>>
};
export default function Footer({ total, nextSectionString, nextSectionIndex, limit }: FooterProps) {
  useEffect(() => {
    setNextSection(nextSectionIndex);
  }, [navBarClick, nextSectionIndex, setNextSection]);

  const onBtnFooterClick = () => {
    if (nextSectionIndex < limit) {
      setNextSection((ns) => ns + 1);
      setBtnFooterClick((bfc) => bfc + 1);
    } else alert("Under development!");
  }
  return (
    <footer className={scss.footer}>
      <div className={cn("row justify-content-between align-items-center m-0 pt-3 pb-3", scss.myTopShadow)}>
        <div className="col-2">
          <div className="row">
            <div className="col-12"><div className={cn("h1 mb-0", scss.myLabel)}>Total</div></div>
            <div className="col-12"><h3>{total.currency + printPrice(total.value)}</h3></div>
          </div>
        </div>
        <div className="col-2">
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