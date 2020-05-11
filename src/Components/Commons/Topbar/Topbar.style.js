import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export const AppBarWrapper = styled(AppBar)`

    &.primary {
        background-color  : #181818;
    }

    &.root {
        box-shadow  : none;
    }

    &.settings {
        width   : ${props => props.isMobileView ? "100%" : "80px"};
        height  : ${props => props.isMobileView ? "60px" : "100%"};
        left    : 0;
    }
`;

export const ToolbarWrapper = styled(Toolbar)`

    &.regular {
        top        : 50%;
        transform  : translate(0,-50%);
    }
`;

export const TopBarWrapper = styled.div`
    margin : 0 0 0 auto;

    .icons {    
        .icon {
            display         : flex;
            flex-direction  : column;

            .icon-property {
                color     : grey;
                width     : 30px;
                height    : 30px;
                margin    : 10px 0;

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

    .menu-icon {
        cursor  : pointer;
        transition: .4s;

        .menu-line {
            width               : 30px;
            height              : 2px;
            background-color    : ${props => (props.topcolor || props.opendrawer) ? "#1179d6" : "#fff"};
            margin              : 5px 0;
            transition          : all 0.4s;
        }

        &.close-menu {
            transform : rotate(180deg);
            .second-line{
                opacity  : 0;
            }
            .first-line{
                transform: rotate(45deg) translate(4px,5px);
            }
            .last-line{
                transform: rotate(-45deg) translate(5px,-6px);
            }
            
        }
    }
`;

export const DrawerWrapper = styled(SwipeableDrawer)`

    .drawer{
        width             : 100%;
        height            : 60px;
        margin            : 60px 0 0;
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