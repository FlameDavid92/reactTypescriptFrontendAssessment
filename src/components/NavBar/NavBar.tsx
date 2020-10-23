import React, { FC } from "react";
import { Section } from '../../model/interfaces';
import scss from './navbar.module.scss';
import cn from 'classnames';

import {check} from '../../utils/checkModelSelection';

type NavBarProps = {
    sections: Array<Section>,
    currentSectionId: number,
    setCurrentSectionId : React.Dispatch<React.SetStateAction<number>>
}
const NavBar: FC<NavBarProps> = ({sections, currentSectionId,setCurrentSectionId}) => {
    //const { sections, nextSectionIndex, btnFooterClick, navBarClick, setNavBarClick, setNextSection } = props;
    const isActive = (id: number) => {
        let className = '';
        if (id === (currentSectionId)) {
            className = scss.myActive;
        }
        return className;
    }
    const onLinkNavBarClick = (id:number) => {
        if(check()) setCurrentSectionId(id);
        else alert("Seleziona un prodotto!");
    }

    return (
        <nav>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    {sections.map(s => {
                        return (
                            <span key={s.id} className={cn("px-2", scss.middleUnderline, scss.myLink, isActive(s.id))} onClick={()=>onLinkNavBarClick(s.id)}>
                                {s.name}
                            </span>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
