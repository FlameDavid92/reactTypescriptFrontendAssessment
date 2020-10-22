import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {Price} from '../../model/interfaces';
import {printPrice} from '../../utils/price';
import scss from './footer.module.scss';
import cn from 'classnames';

type FooterProps = {
  total: Price,
  nextSectionString: string,
  nextSectionIndex: number,
  limit: number,
  navBarClick: number,
  btnFooterClick: number,
  setBtnFooterClick: React.Dispatch<React.SetStateAction<number>>,
  setNextSection: React.Dispatch<React.SetStateAction<number>>
};
export default function Footer({ total, nextSectionString, nextSectionIndex, limit, navBarClick, btnFooterClick, setNextSection, setBtnFooterClick }: FooterProps) {
  useEffect(() => {
    setNextSection(nextSectionIndex);
  }, [navBarClick, nextSectionIndex, setNextSection]);

  const onBtnFooterClick = () => {
    if (nextSectionIndex < limit) {
      setNextSection(nextSectionIndex + 1);
      setBtnFooterClick(btnFooterClick + 1);
    } else alert("Under development!");
  }
  return (
    <footer className="footer">
      <div className={"row justify-content-between align-items-center m-0 pt-3 pb-3 my-top-shadow"+scss.my-top-shadow}>
        <div className="col-2">
          <div className="row">
            <div className="col-12"><div className="h1 mb-0 my-label">Total</div></div>
            <div className="col-12"><h3>{total.currency+printPrice(total.value)}</h3></div>
          </div>
        </div>
        <div className="col-2">
          <button className="my-button" onClick={() => onBtnFooterClick()}>
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