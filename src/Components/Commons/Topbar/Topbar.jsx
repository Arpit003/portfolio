import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { URL_HOME, URL_ABOUT, URL_SKILLS, URL_CONTACT } from "Helpers/Paths";
import { ToolbarWrapper, AppBarWrapper, TopBarWrapper } from "./Topbar.style";
import { IconButton } from '@material-ui/core';

// import Logo from 'Assets/icons/svgdemo.svg';
import { BREAKPOINTS_VALUE } from 'Styles/Constants';


function Topbar(props) {
    const [drawer, openDrawer] = useState(false);

    useEffect(() => {
        handleVisible();
        window.addEventListener('resize', handleVisible);
        return () => {
            window.removeEventListener('resize', handleVisible);
        }
    }, []);

    /* 
     * VISIBLE MENU ICON FOR PHABLET & MOBILE (LESS THEN 650PX)
     */
    const handleVisible = () => {

        if (window.innerWidth < BREAKPOINTS_VALUE.PHABLET) {
            return;
        }

        openDrawer(false);
    }

    /* 
     * CHANGE PAGE
     */
    const changePage = (path) => {
        menuClick()
        props.history.push(path)
    }

    /* 
     * OPEN MENU FOR MOBILE VIEWS
     */
    const menuClick = () => {
        if (drawer) document.getElementById("myNav").style.height = "0";
        else document.getElementById("myNav").style.height = "100%";
        openDrawer(!drawer);
    }

    /* 
     * MENU BUTTON STYLE
     */
    const MenuButton = (props) => (
        <IconButton onClick={() => menuClick()}>
            <div className={`menu-icon ${drawer && "close-menu"}`}>
                <div className="menu-line first-line"></div>
                <div className="menu-line second-line"></div>
                <div className="menu-line third-line"></div>
                <div className="menu-line last-line"></div>
            </div>
        </IconButton>
    )

    let pathName = props.location.pathname;

    return (
        <AppBarWrapper position="fixed" className="settings" classes={{ colorPrimary: "primary", root: "root" }}
        >
            <div id="myNav" className="overlay">
                <div className="overlay-content">
                    <div className="icons">
                        <div className="icon">
                            <span className={`icon-property ${pathName === URL_HOME && "active"} ${drawer && "animate"}`} onClick={() => changePage(URL_HOME)} >Home</span>
                            <span className={`icon-property ${pathName === URL_ABOUT && "active"} ${drawer && "animate"}`} onClick={() => changePage(URL_ABOUT)} >About</span>
                            <span className={`icon-property ${pathName === URL_SKILLS && "active"} ${drawer && "animate"}`} onClick={() => changePage(URL_SKILLS)} >Skills</span>
                            <span className={`icon-property ${drawer && "animate"}`}>Work</span>
                            <span className={`icon-property ${pathName === URL_CONTACT && "active"} ${drawer && "animate"}`} onClick={() => changePage(URL_CONTACT)} >Contact</span>
                        </div>
                    </div>
                </div>
            </div>
            <ToolbarWrapper variant="regular" classes={{ regular: "regular" }}
            >
                <TopBarWrapper ismobile={drawer ? 1 : 0}>

                    <MenuButton />

                </TopBarWrapper>
            </ToolbarWrapper>
        </AppBarWrapper>
    );
}




export default withRouter(Topbar);