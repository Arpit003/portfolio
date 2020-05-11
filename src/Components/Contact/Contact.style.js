import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from 'Components/Website.style';

export const ContactWrapper = styled.div`
    ${BodyTagWrapper}{
        ${responsive.TABLET`
            margin  : 30px 0 0 40px;
        `}

        ${responsive.PHABLET`
            margin  : 20px 0 0 40px;
        `}
    }

    ${HtmlTagWrapper}{
        ${responsive.TABLET`
            margin  : 30px 0 0 20px;
        `}

        ${responsive.PHABLET`
            margin  : 20px 0 0 20px;
        `}
    }

    ${AnimationTextWrapper}{
        .intro {
            padding  : 0 0 0 20px;
            margin   : 0 0 0 70px;
            
            ${responsive.LAPTOP`
                margin  : 0 0 0 50px;
            `}

            ${responsive.TABLET`
                margin   : 0 0 0 50px;
            `}

            ${responsive.MOBILE`
                margin   : 0 0 0 30px;
            `}
        }
    }

    .html-tag-h1-start {
        font-family  : ${FONTS.PRIMARY_ITALIC};
        font-size    : 18px;
        margin       : 130px 0 0 70px;
        color        : #4b4b4b;

        ${responsive.LAPTOP`
            margin  : 130px 0 0  40px;
        `}
        ${responsive.TABLET`
            margin  : 10px 0 0 50px;        
        `}

    }

    .html-tag-h1-end {
        font-family  : ${FONTS.PRIMARY_ITALIC};
        font-size    : 18px;
        margin       : 10px 0 0 70px;
        color        : #4b4b4b;

        ${responsive.LAPTOP`
            margin  : 10px 0 0  40px;
        `}

        ${responsive.PHABLET`
            margin  : 10px 0 0 50px;        
        `}

        ${responsive.MOBILE`
            margin  : 10px 0 0 40px;        
        `}
    }

    .blast {
        color  : #08fdd8;
    }
`;
