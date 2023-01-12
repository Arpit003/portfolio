import styled, { css } from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const max = 5;
export const strokeStep = 90;
export const colors = "#4d4d4e";

export const HomeWrapper = styled.div`

    overflow-x  : hidden;
    height      : 100vh;

    .start-tag {
        padding  : 70px 0 0;
    }
    
    .container {
        display    : flex;
        margin     : 5% 0;

        .left-side {
            width  : 100%;

            .html-tag-h1-start {
                font-family  : ${FONTS.PRIMARY_ITALIC};
                font-size    : 18px;
                padding      : 30px 0 0 70px;
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


                ${responsive.TABLET`
                    padding  : 0 0 0 40px;
                `}
                ${responsive.PHABLET`
                    padding  : 0 0 0 50px;        
                `}

                ${responsive.MOBILE`
                    padding  : 0 0 0 40px;        
                `}
            }

            .html-tag-h1-end {
                font-family  : ${FONTS.PRIMARY_ITALIC};
                font-size    : 18px;
                padding      : 10px 0 0 70px;
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


                ${responsive.TABLET`
                    padding  : 10px 0 0 40px;        
                `}

                ${responsive.PHABLET`
                    padding  : 10px 0 0 50px;        
                `}

                ${responsive.MOBILE`
                    padding  : 10px 0 0 40px;        
                `}
            }
    
            .stacks {
                font-family     : ${FONTS.PRIMARY_LIGHT};
                color           : #858585;
                margin          : 20px 0 0 90px;
                letter-spacing  : 5px;

                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 3s;
                animation-fill-mode  : both;

                @keyframes fadeInUp {
                    from {
                        transform: translate3d(0,100px,0)
                    }

                    to {
                        transform: translate3d(0,0,0);
                        opacity: 1
                    }
                }

                &:hover {
                    cursor  : default;
                }
                
                ${responsive.TABLET`
                    margin  : 20px 0 0 50px;
                `}

                ${responsive.PHABLET`
                    letter-spacing  : 3px;
                `}

                ${responsive.PHABLET`
                    letter-spacing  : 2px;
                `}
            }

            .contact {
                width           : 200px;
                padding         : 10px 0;
                margin          : 20px 0 0 90px;
                color           : #08f6d2;
                border-color    : #08f6d2;
                letter-spacing  : 5px;

                &:hover {
                    background-color  : #08f6d2;
                    color             : #333333;
                    cursor            : default;
                }

                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 3s;
                animation-fill-mode  : both;

                @keyframes fadeInUp {
                    from {
                        transform: translate3d(0,100px,0)
                    }

                    to {
                        transform: translate3d(0,0,0);
                        opacity: 1
                    }
                }
            
                ${responsive.TABLET`
                    margin  : 20px 0 0 50px;
                `}
            }
        }

        .right-side {
            z-index  : -100;
            margin   : 0 0 0 -30%;
            width    : 100%;

            ${responsive.TABLET`
                margin  : 0 0 0 -50%;
            `}

            ${responsive.MOBILE`
                margin  : 0 0 0 -80%;
            `}

            .image-logo {
                
                height  : 400px;
                font    : 38em/1 ${FONTS.PRIMARY};
                
                ${responsive.LAPTOP`
                    
                `}
                
                ${responsive.TABLET`
                    font    : 25em/1 ${FONTS.PRIMARY};
                    height  : 0;
                `}

                ${responsive.PHABLET`
                    font    : 22em/1 ${FONTS.PRIMARY};
                `}

                ${responsive.MOBILE`
                    font    : 20em/1 ${FONTS.PRIMARY};
                    height  : 0px;
                `}

                svg {
                    position   : relative;
                    width      : 100%;
                    height     : 512px;
                    /* top        : 50%; */
                    /* transform  : translate(0,-65%); */
                    /* rotate     : -18deg; */
                    overflow   : hidden;

                    ${responsive.LAPTOP`
                        width      : 100%;
                        
                    `}

                    ${responsive.TABLET`
                        height  : 350px;
                    `}

                    ${responsive.PHABLET`
                        height  : 300px;
                    `}

                    ${responsive.MOBILE`
                        height   : 270px;
                    `}
                }

                .text-copy {
                    fill: none;
                    stroke: white;
                    stroke-dasharray: ${strokeStep}% 360%;
                    stroke-width: 3px;
                    
                    animation: stroke-offset 5s linear;
                
                    ${createCSS(colors)}
                }

                @keyframes stroke-offset {
                    0% {
                        stroke-dashoffset: 400%;  
                        stroke-dasharray: 100 ${strokeStep * max}%;
                    }
                }
            }
        }
    } 

    .end-tag {
    }
    
`

function createCSS() {
    let styles = '';

    for (let item = 1; item <= max; item++) {
        let color = (item === 4 || item === 3) ? "#fc0854" : "#08fdd8";
        styles += `
            &:nth-child(${item}) {
                stroke: ${color};
                stroke-dashoffset: ${strokeStep * item}%;
            }
       `
    }
    return css`${styles}`;
}
