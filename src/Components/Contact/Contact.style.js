import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const ContactWrapper = styled.div`

    display    : flex;
    color      : #fff;
    flex-wrap  : wrap;

    .form-section {
        width  : 50%;

        ${responsive.TABLET`
            width   : 100%;
            height  : 50%;
            margin  : 10% 0 0;
        `}
         
        .html-tag-h1-start {
            font-family  : ${FONTS.PRIMARY_ITALIC};
            font-size    : 18px;
            padding      : 40px 0 0 70px;
            color        : #4b4b4b;
            cursor       : default;

            ${responsive.TABLET`
                padding  : 30px 0 0 40px;
            `}
            ${responsive.PHABLET`
                padding  : 30px 0 0 50px;        
            `}

            ${responsive.MOBILE`
                padding  : 30px 0 0 40px;        
            `}

        }

        .html-tag-h1-end {
            font-family  : ${FONTS.PRIMARY_ITALIC};
            font-size    : 18px;
            padding      : 1% 0 0 70px;
            color        : #4b4b4b;
            cursor       : default;

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

        .blast {
            color  : #08fdd8;
        }

        .form {
            display    : flex;
            flex-wrap  : wrap;
            width      : 80%;
            margin     : 20px auto 0 70px;

            ${responsive.LAPTOP`
                margin  : 0 auto 0 60px;
            `}

            ${responsive.TABLET`
                margin  : 0 auto 0 50px;
            `}
            
            .send {
                width           : 100px;
                padding         : 10px 0;
                margin          : 10px 10px 0 auto;
                color           : #08f6d2;
                border-color    : #08f6d2;
                letter-spacing  : 5px;
                cursor          : default;

                &:hover {
                    background-color  : #08f6d2;
                    color             : #333333;
                    cursor            : default;
                }

                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 1s;
                animation-fill-mode  : both;
                        
                ${responsive.LAPTOP`
                    margin  : 10px 0 0 auto;
                `}
            }

            .inline-field {
                width    : 48%;
                margin   : 0 auto;
                
                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 1s;
                animation-fill-mode  : both;

                ${responsive.LAPTOP`
                    width   : 100%;
                    margin  : 10px auto 0;
                `}
            }

            .root {
                background-color  : #2b2b2b;
            }

            .full-width-field {
                width    : 98%;
                margin   : 10px auto 0;

                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 3s;
                animation-fill-mode  : both;

                ${responsive.LAPTOP`
                    width  : 100%;
                `}
            }

            .input-color {
                border-bottom  : 2px solid transparent;
                color          : #8d8d8d;
                margin         : 0 0 0 5px;

                &:focus-within {
                    color : #8d8d8d;
                }
            }

            .underline-color {
                &.input-error {
                    &:after {
                        border-bottom-color  : red; 
                    }
                }
                &:after {
                    border-bottom  : 2px solid #08fdd8;
                }
                &:before {
                    border-bottom  : 1px solid transparent;
                }
            }

            .root {
                background-color  : #2b2b2b;
            }

            .focused {
                color  : #08fdd8;
            }

            .label-filled {
                color    : #08fdd8;
                padding  : 0 0 0 10px;
            }

            @keyframes fadeInUp {
                from {
                    transform: translate3d(0,40px,0)
                }

                to {
                    transform: translate3d(0,0,0);
                    opacity: 1
                }
            }
        }

        .paragraph {
            flex-direction       : row;
            width                : 80%;
            letter-spacing       : 1px;
            font-family          : ${FONTS.PRIMARY_LIGHT};
            margin               : 0 0 0 90px;
            animation            : fadeIn 3s;
            opacity              : 0;
            animation-delay      : 2s;
            animation-fill-mode  : forwards;
            cursor               : default;
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            ${responsive.LAPTOP`
                margin  : 0 0 0 70px;
            `};
            
            ${responsive.TABLET`
                margin  : 0 0 0 60px;
            `}

            ${responsive.PHABLET`
                width      : 80%;  
                font-size  : 14px;
            `}

            ${responsive.MOBILE`
                font-size  : 12px;
                margin     : 0 0 0 50px;
            `}
        }
    }

    .google-map {
        width  : 50%;
        /* padding  : 0 20px 0; */
        ${responsive.TABLET`
            width  : 100%;
            height : 50%;
        `}

        .map {
            width   : 100%;
        }
    }
`;
