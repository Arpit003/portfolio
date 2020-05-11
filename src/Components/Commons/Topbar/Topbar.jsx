import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { faHome, faUser, faUserCog, faEnvelope, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { URL_HOME, URL_ABOUT, URL_SKILLS, URL_CONTACT } from "Helpers/Paths";
import { ToolbarWrapper, AppBarWrapper, TopBarWrapper, DrawerWrapper } from "./Topbar.style";
import { IconButton } from '@material-ui/core';

import { BREAKPOINTS_VALUE } from 'Styles/Constants';


function Topbar(props) {
    const [isMobileView, setMobileView] = useState(false);
    const [drawer, openDrawer] = useState(false);

    useEffect(() => {
        handleVisible();
        window.addEventListener('resize', handleVisible)
        return () => {
            window.removeEventListener('resize', handleVisible)
        }
    }, []);

    /* 
     * VISIBLE MENU ICON FOR PHABLET & MOBILE (LESS THEN 650PX)
     */
    const handleVisible = () => {

        if (window.innerWidth < BREAKPOINTS_VALUE.PHABLET) {
            setMobileView(true);
            return;
        }
        openDrawer(false);
        setMobileView(false);
    }

    /* 
     * CHANGE PAGE
     */
    const changePage = (path) => {
        openDrawer(false)
        props.history.push(path)
    }

    /* 
     * OPEN MENU FOR MOBILE VIEWS
     */
    const menuClick = () => {
        openDrawer(!drawer)
    }

    /* 
     * MENU BUTTON STYLE
     */
    const MenuButton = (props) => (
        <IconButton onClick={() => menuClick()}>
            <div className={`menu-icon ${drawer ? 'close-menu' : ''}`}>
                <div className="menu-line first-line"></div>
                <div className="menu-line second-line"></div>
                <div className="menu-line last-line"></div>
            </div>
        </IconButton>
    )

    /* 
     * COMMON ICONS FOR MOBILE VIEW & DESKTOP VIEW
     */
    const icons = () => (
        <div className="icons">
            <div className="icon">
                <FontAwesomeIcon icon={faHome} className={`icon-property ${pathName === URL_HOME && "active"}`} onClick={() => changePage(URL_HOME)} />
                <FontAwesomeIcon icon={faUser} className={`icon-property ${pathName === URL_ABOUT && "active"}`} onClick={() => changePage(URL_ABOUT)} />
                <FontAwesomeIcon icon={faUserCog} className={`icon-property ${pathName === URL_SKILLS && "active"}`} onClick={() => changePage(URL_SKILLS)} />
                <FontAwesomeIcon icon={faCode} className="icon-property" />
                <FontAwesomeIcon icon={faEnvelope} className={`icon-property ${pathName === URL_CONTACT && "active"}`} onClick={() => changePage(URL_CONTACT)} />
            </div>
        </div>
    )

    let pathName = props.location.pathname;

    return (
        <AppBarWrapper position="fixed" className="settings" classes={{ colorPrimary: "primary", root: "root" }}
            isMobileView={isMobileView ? 1 : 0}>
            <ToolbarWrapper variant="regular" classes={{ regular: "regular" }}
            >
                <TopBarWrapper isMobileView={isMobileView ? 1 : 0}>
                    {
                        isMobileView &&
                        <MenuButton />
                    }

                    <DrawerWrapper
                        anchor="right"
                        classes={{
                            paperAnchorRight: "drawer"
                        }}
                        open={drawer}
                        BackdropProps={{ invisible: true }}
                        transitionDuration={1000}
                        onClose={() => menuClick()}
                        onOpen={() => menuClick()}
                    >
                        {icons()}
                    </DrawerWrapper>

                    {!isMobileView && icons()}
                </TopBarWrapper>
            </ToolbarWrapper>
        </AppBarWrapper>
    );
}




export default withRouter(Topbar);