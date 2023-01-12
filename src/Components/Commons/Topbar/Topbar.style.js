import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { FONTS, responsive } from "Styles/Constants";

export const AppBarWrapper = styled(AppBar)`

    &.primary {
        background-color  : transparent;

        ${responsive.TABLET`
            background-color  : #181818;    
        `}
    }

    &.root {
        box-shadow  : none;
    }

    &.settings {
        width   : 100%;
        left    : 0;
        height  : 100px;

        ${responsive.TABLET`
            height  : 55px;
            opacity  : 0.9;
        `}
    }

    .overlay {
        height            : 0%;
        width             : 100%;
        position          : fixed;
        z-index           : 100;
        top               : 0;
        left              : 0;
        background-color  : rgba(0,0,0, 0.9);
        overflow          : scroll;
        transition        : 1s;
    }

    .overlay-content {
        position    : relative;
        top         : 25%;
        width       : 100%;
        text-align  : center;
        margin-top  : 30px;
        
        .icons {    
            .icon {
                display         : flex;
                flex-direction  : column;

                .icon-property {
                    color           : grey;
                    margin          : 10px;
                    letter-spacing  : 5px;
                    font-family     : ${FONTS.PRIMARY_LIGHT};
                    font-size       : 32px;

                    &.animate {
                        animation-name       : fadeInUp;
                        opacity              : 0;
                        animation-duration   : 3s;
                        animation-fill-mode  : forwards;
                        animation-delay      : 0.5s;
                    }

                    @keyframes fadeInUp {
                        from {
                            transform: translate3d(0,200px,0)
                        }

                        to {
                            transform: translate3d(0,0,0);
                            opacity: 1
                        }
                    }

                    &.active {
                        color   : #08fdd8;
                    }

                    &:hover {
                        cursor  : pointer;
                        color   : #08fdd8;
                    }
                }
            }
        }
    }
`;

export const ToolbarWrapper = styled(Toolbar)`

    &.regular {
        top        : 50%;
        transform  : translate(0,-50%);
        z-index    : 1000;
        margin     : 0 0 0 auto;
    }
`;

export const TopBarWrapper = styled.div`


    .menu-icon {
        cursor      : pointer;
        transition  : 1s;
        z-index     : 1000;

        .menu-line {
            width               : 40px;
            height              : 1px;
            background-color    : #fff;
            margin              : 5px 0;
        }

        &.close-menu {
            &:hover{
                opacity  : 0.5;
            }
            .second-line,.third-line {
                opacity  : 0;
            }
            .first-line {
                transform: rotate(45deg) translate(4px,5px);
            }
            .last-line{
                transform: rotate(-45deg) translate(9px,-8px);
            }
        }
    }
`;

export const DrawerWrapper = styled(SwipeableDrawer)`

    .drawer{
        width             : 100%;
        height            : 60px;
        /* margin            : 60px 0 0; */
        background-color  : #181818;
    }

    .icons { 
        transform  : translate(0,50%);

        .icon {
            display         : flex;
            flex-direction  : row;

            .icon-property {
                color     : grey;
                width     : 30px;
                height    : 30px;
                margin    : 0 auto;

                &.active {
                    color   : #08fdd8;
                }

                &:hover {
                    cursor  : pointer;
                    color   : #08fdd8;
                }
            }
        }
    }
`