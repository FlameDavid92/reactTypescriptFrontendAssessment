import React, {FC} from "react";
import { Section } from '../../model/interfaces';
import scss from './navbar.module.scss';
import cn from 'classnames';

type NavBarProps = {
    sections: Array<Section>,
    nextSectionIndex: number,
    btnFooterClick: number,
    navBarClick: number,
    setNavBarClick: React.Dispatch<React.SetStateAction<number>>,
    setNextSection: React.Dispatch<React.SetStateAction<number>>
}

const NavBar: FC<NavBarProps> = (props) => {
    const {sections, nextSectionIndex, btnFooterClick, navBarClick, setNavBarClick, setNextSection} = props;
    function isActive(id: number) {
        let className = '';
        if (id === (nextSectionIndex-1)) {
            className = 'my-active';
        }
        return className;
    }

    return (
        <nav>
            <div className="row justify-content-center">
                <div className="col-6">
                    {sections.map(s => {
                        return (
                            <span key={s.id} className={cn("px-2", scss.middleUnderline, scss.myLink, isActive(s.id))}>
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
