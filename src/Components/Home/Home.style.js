import styled, { css } from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const max = 5;
export const strokeStep = 90;
export const colors = "#4d4d4e";

export const HomeWrapper = styled.div`

    overflow  : hidden;
    height    : 100%;

    .start-tag {
        position  : absolute;
    }

    .container {
        display    : flex;
        position   : absolute;
        top        : 50%;
        transform  : translate(0,-50%);

        .left-side {
            width  : 100%;

            .html-tag-h1-start {
                font-family  : ${FONTS.PRIMARY_ITALIC};
                font-size    : 18px;
                padding      : 30px 0 0 70px;
                color        : #4b4b4b;

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

                animation            : fadeIn 1s;
                opacity              : 0;
                animation-delay      : 1s;
                animation-fill-mode  : forwards;
            
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            
                ${responsive.TABLET`
                    margin  : 20px 0 0 50px;
                `}
            }
        }

        .right-side {
            z-index  : -100;
            .image-logo {
                
                width   : calc(100% - 60%);
                height  : 600px;
                font    : 38em/1 ${FONTS.PRIMARY};
                
                ${responsive.LAPTOP`
                    margin  : 0 0 0 -150px;
                `}
                
                ${responsive.TABLET`
                    font    : 25em/1 ${FONTS.PRIMARY};
                    height  : 500px;
                `}

                ${responsive.PHABLET`
                    font    : 22em/1 ${FONTS.PRIMARY};
                    height  : 400px;
                `}

                ${responsive.MOBILE`
                    font    : 20em/1 ${FONTS.PRIMARY};
                    height  : 360px;
                `}

                svg {
                    position   : absolute;
                    width      : 60%;
                    height     : 100%;
                    top        : 50%;
                    transform  : translate(0,-50%);
                    /* rotate     : -18deg; */
                    overflow   : hidden;

                    ${responsive.LAPTOP`
                        width      : 55%;
                        transform  : translate(-30%,-50%);
                    `}

                    ${responsive.TABLET`
                        width      : 50%;
                        opacity    : 0.5;
                        transform  : translate(-50%,-75%);
                    `}

                    ${responsive.PHABLET`
                        width      : 60%;
                        transform  : translate(-30%,-70%);
                    `}

                    ${responsive.MOBILE`
                        width      : 70%
                        transform  : translate(-50%,-70%);
                        overflow   : hidden;
                    `}
                }

                .text-copy {
                    fill: none;
                    stroke: white;
                    stroke-dasharray: ${strokeStep}% 360%;
                    stroke-width: 3px;
                    
                    animation: stroke-offset 2s linear;
                
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
        position   : absolute;
        bottom     : 30px;
    }
    
`

function createCSS() {
    let styles = '';

    for (let item = 1; item <= max; item++) {
        let color = (item === 2 || item === 3) ? "#fc0854" : "#08fdd8";
        styles += `
            &:nth-child(${item}) {
                stroke: ${color};
                stroke-dashoffset: ${strokeStep * item}%;
            }
       `
    }
    return css`${styles}`;
}
