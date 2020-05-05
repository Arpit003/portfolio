import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { faHome, faUser, faUserCog, faEnvelope, faEye, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { URL_HOME, URL_ABOUT } from "Helpers/Paths";
import { ToolbarWrapper, TopBarWrapper } from "./Topbar.style";


function Topbar(props) {
    const [isResponsive, setResponsiveState] = useState(false);

    const makeResponsive = () => {
        setResponsiveState(!isResponsive)
    }

    const changePage = (path) => {
        setResponsiveState(!isResponsive)
        props.history.push(path)
    }

    let pathName = props.location.pathname;
    return (
        <TopBarWrapper>
            <ToolbarWrapper isResponsive={isResponsive ? 1 : 0}>
                <div>
                    <FontAwesomeIcon icon={faBars} className="menu" onClick={() => makeResponsive()} />
                </div>
                <div className="icons">
                    <div className="icon">
                        <FontAwesomeIcon icon={faHome} className={`icon-property ${pathName === URL_HOME && "active"}`} onClick={() => changePage(URL_HOME)} />
                        <FontAwesomeIcon icon={faUser} className={`icon-property ${pathName === URL_ABOUT && "active"}`} onClick={() => changePage(URL_ABOUT)} />
                        <FontAwesomeIcon icon={faUserCog} className="icon-property" />
                        <FontAwesomeIcon icon={faEye} className="icon-property" />
                        <FontAwesomeIcon icon={faEnvelope} className="icon-property" />
                    </div>
                </div>
            </ToolbarWrapper>
        </TopBarWrapper>
    );
}

export default withRouter(Topbar);