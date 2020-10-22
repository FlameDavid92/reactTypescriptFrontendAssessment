import React, { useCallback, useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import './navbar.scss';
import { Section } from '../../utils/interfaces';

type NavBarProps = RouteComponentProps & {
    sections: Array<Section>,
    nextSectionIndex: number,
    btnFooterClick: number,
    navBarClick: number,
    setNavBarClick: React.Dispatch<React.SetStateAction<number>>,
    setNextSection: React.Dispatch<React.SetStateAction<number>>
}

function NavBar(props: NavBarProps): JSX.Element {
    const {
        location: { pathname }
    } = props;

    const navigate = useCallback((index: number, path: string) => {
        props.setNextSection(index + 1);
        props.history.push(path);
    }, [props]);

    useEffect(() => {
        (props.btnFooterClick !== 0) && props.history.push(props.sections[props.nextSectionIndex - 1].path);
    }, [props.btnFooterClick, props.history, props.nextSectionIndex, props.sections]);

    // classic function
    function isActive(path: string) {
        let className = '';
        if (path === pathname) {
            className = 'my-active';
        }
        return className;
    }

    return (
        <nav>
            <div className="row justify-content-center">
                <div className="col-6">
                    {props.sections.map(s => {
                        return (
                            <span key={s.id} className={"middle-underline my-link px-2 " + isActive(s.path)} onClick={() => navigate(s.id, s.path)}>
                                {s.name}
                            </span>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}

export default withRouter(NavBar);
