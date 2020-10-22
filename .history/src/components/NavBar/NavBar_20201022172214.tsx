import React, {FC} from "react";
import { Section } from '../../model/interfaces';
import './navbar.module.scss';

type NavBarProps = {
    sections: Array<Section>,
    nextSectionIndex: number,
    btnFooterClick: number,
    navBarClick: number,
    setNavBarClick: React.Dispatch<React.SetStateAction<number>>,
    setNextSection: React.Dispatch<React.SetStateAction<number>>
}

const NavBar: FC<NavBarProps> = (props) => {
    function isActive(path: string) {
        let className = '';
        /*if (path === pathname) {
            className = 'my-active';
        }*/
        return className;
    }

    return (
        <nav>
            <div className="row justify-content-center">
                <div className="col-6">
                    {props.sections.map(s => {
                        return (
                            <span key={s.id} className={"middle-underline my-link px-2 " + isActive(s.path)}>
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
