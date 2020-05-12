import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from 'Components/Website.style';

export const ContactWrapper = styled.div`

    display    : flex;
    color      : #fff;
    flex-wrap  : wrap;

    .form-section {
        width  : 50%;
         ${responsive.TABLET`
            width  : 100%;
            height : 50%;
         `}
        .html-tag-h1-start {
            font-family  : ${FONTS.PRIMARY_ITALIC};
            font-size    : 18px;
            margin       : 20% 0 0 70px;
            color        : #4b4b4b;

            ${responsive.LAPTOP`
                margin  : 20% 0 0  40px;
            `}
            ${responsive.TABLET`
                margin  : 10% 0 0 50px;        
            `}

        }

        .html-tag-h1-end {
            font-family  : ${FONTS.PRIMARY_ITALIC};
            font-size    : 18px;
            margin       : 1% 0 0 70px;
            color        : #4b4b4b;

            ${responsive.LAPTOP`
                margin  : 1% 0 0  40px;
            `}

            ${responsive.PHABLET`
                margin  : 1% 0 0 50px;        
            `}

            ${responsive.MOBILE`
                margin  : 1% 0 0 40px;        
            `}
        }

        .blast {
            color  : #08fdd8;
        }

        .form {
            display    : flex;
            flex-wrap  : wrap;
            width      : 90%;
            margin     : 0 auto 0 70px;

            ${responsive.LAPTOP`
                margin  : 0 auto 0 40px;
            `}

            ${responsive.TABLET`
                margin  : 0 auto 0 10px;
            `}

            .inline-field {
                padding  : 0 10px;
                width    : 250px;

                ${responsive.LAPTOP`
                    width   : 90%;
                    margin  : 10px auto;
                `}
            }

            .root {
                background-color  : #2b2b2b;
            }
            .focused {
                color  : #08fdd8;
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
            margin  : 10px auto 0;
        }
    }
`;
