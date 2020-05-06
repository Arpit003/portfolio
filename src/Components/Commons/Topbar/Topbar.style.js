import styled from "styled-components";
import { responsive } from "Styles/Constants";

export const ToolbarWrapper = styled.div`
    width             : 70px;
    height            : 100%;
    background-color  : #181818;
    position          : absolute;

    .icons {
        width           : 40px;
        margin          : 0 auto;
        top             : 30%;
        position        : relative;

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

    .menu { 
        height    : 0;
        width     : 0;
    }

    ${responsive.PHABLET`

        width             : 100%;
        height            : 70px;
        position          : relative;

        .icons {
            width             : 100%;
            position          : initial;  
            padding           : ${props => props.isResponsive ? '70px 0 0' : '0'};
            top               : 0%;
            transition        : all 2s ease;
            
            .icon {
                width             : 100%;
                height            : 70px;
                background-color  : #181818;
                display           : flex;
                flex-direction    : row;
    
                .icon-property {
                    margin      : 0 auto;
                    transition  : all 2s ease;
                    width       : ${props => props.isResponsive ? '40px' : '0'};
                }
            }
        }

        .menu {
            position  : absolute;
            color     : white;
            height    : 30px;
            width     : 30px;
            right     : 5%;
            margin    : 10px 0;

            &:hover {
                cursor  : pointer;
                color   : #08fdd8;
            }
        }
    `}

    ${responsive.MOBILE`
        .icons {

            height  : 100px;
            
            .icon {
                .icon-property {
                    margin      : 0 auto;
                    transition  : all 2s ease;
                    width       : ${props => props.isResponsive ? '30px' : '0'};
                    height      : 30px;
                }
            }   
        }
    `}
`
export const LinksWrapper = styled.div`
`

export const TopBarWrapper = styled.div`

    
`