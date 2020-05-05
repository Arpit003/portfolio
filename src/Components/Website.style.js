import styled from "styled-components";
import { responsive, FONTS } from "Styles/Constants";

export const ContentWrapper = styled.div`

    margin  : 0 0 0 100px;

    ${responsive.PHABLET`
        margin  : 0;
    `}
`;

export const BodyTagWrapper = styled.div`

    font-family  : ${FONTS.PRIMARY_ITALIC};
    font-size    : 18px;
    padding      : 30px 0 0 50px;
    color        : #4b4b4b;

    animation            : fadeIn 1s;
    opacity              : 0;
    animation-delay      : 1s;
    animation-fill-mode  : forwards;

    &:hover {
        cursor  : default;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    ${responsive.PHABLET`
        padding  : 0;
        margin   : 50px 0 0 40px;
    `}
`

export const HtmlTagWrapper = styled.div`
    font-family  : ${FONTS.PRIMARY_ITALIC};
    font-size    : 18px;
    padding      : 50px 0 0 30px;
    color        : #4b4b4b;

    ${responsive.PHABLET`
        padding  : 0;
        margin   : 50px 0 0 20px;
    `}
`

export const AnimationTextWrapper = styled.div`
    .intro {
        position        : relative;
        font-family     : ${FONTS.PRIMARY};
        width           : 610px;
        color           : #fff;
        margin          : 0 0 0 90px;
        border-right    : 2px solid rgba(255,255,255,.75);
        font-size       : 70px;
        white-space     : nowrap;
        overflow        : hidden;

        .blast {
            animation-duration         : 1s;
            animation-fill-mode        : both;
            animation-iteration-count  : 1;
            display                    : inline-block;

           &:hover {
               animation-name  : rubberBand;
               color           : #08f6d2;
               cursor          : default;
           } 
        }

        ${responsive.TABLET`
            font-size  : 50px;
        `}

        ${responsive.PHABLET`
            font-size  : 40px;
            margin     : 0 0 0 70px;
        `}

        ${responsive.MOBILE`
            font-size  : 30px;
            margin     : 0 0 0 50px;
        `}
        
        /* Animation */
        &.anim-typewriter{
            animation: typewriter 1s steps(44) 1s 1 normal both,
                        blinkTextCursor 500ms steps(44) infinite normal;
        }
        @keyframes rubberBand {
            from {
                transform: scale3d(1, 1, 1);
            }

            30% {
                transform: scale3d(1.25, 0.75, 1);
            }

            40% {
                transform: scale3d(0.75, 1.25, 1);
            }

            50% {
                transform: scale3d(1.15, 0.85, 1);
            }

            65% {
                transform: scale3d(.95, 1.05, 1);
            }

            75% {
                transform: scale3d(1.05, .95, 1);
            }

            to {
                transform: scale3d(1, 1, 1);
            }
        }
        @keyframes typewriter{
            from { 
                    width: 0;
                    height : 10px;
                }
    
            to { 
                    width  : 610px;
                    height : 100%;
                }
        }
        @keyframes blinkTextCursor{
            from{border-right-color: transparent;}
            to{border-right-color: transparent;}
        }
    }
`