import React, { FC } from "react";
import { Section } from '../../model/interfaces';
import scss from './navbar.module.scss';
import cn from 'classnames';

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
        setCurrentSectionId(id);
    }

    return (
        <nav>
            <div className="row justify-content-center">
                <div className="col-6">
                    {sections.map(s => {
                        return (
                            <span key={s.id} className={cn("px-2 px-sm-0 mb-sm-5", scss.middleUnderline, scss.myLink, isActive(s.id))} onClick={()=>onLinkNavBarClick(s.id)}>
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