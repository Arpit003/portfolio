import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const HomeWrapper = styled.div`

    overflow  : hidden;

    .html-tag-h1-start {
        font-family  : ${FONTS.PRIMARY_ITALIC};
        font-size    : 18px;
        margin       : 130px 0 0 70px;
        color        : #4b4b4b;

        ${responsive.PHABLET`
            margin  : 130px 0 0 50px;        
        `}

        ${responsive.MOBILE`
            margin  : 130px 0 0 40px;        
        `}
    }

    .html-tag-h1-end {
        font-family  : ${FONTS.PRIMARY_ITALIC};
        font-size    : 18px;
        margin       : 10px 0 0 70px;
        color        : #4b4b4b;

        ${responsive.PHABLET`
            margin  : 10px 0 0 50px;        
        `}

        ${responsive.MOBILE`
            margin  : 10px 0 0 40px;        
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

        ${responsive.PHABLET`
            margin  : 20px 0 0 50px;
        `}
    }

    .end-tag {
        margin  : 100px 0 0;
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
    
        ${responsive.PHABLET`
            margin  : 20px 0 0 50px;
        `}

    }
`