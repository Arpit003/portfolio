import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from 'Components/Website.style';

export const SkillsWrapper = styled.div`
    overflow  : hidden;
    color     : #fff;

    ${BodyTagWrapper}{
        ${responsive.TABLET`
            margin  : 30px 0 0 40px;
        `}

        ${responsive.PHABLET`
            margin  : 20px 0 0 40px;
        `}

        ${responsive.MOBILE`
            margin  : 20px 0 0 30px;
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
                margin   : 0 0 0 50px;
            `}

            ${responsive.MOBILE`
                margin   : 0 0 0 30px;
            `}
        }

    }

    .blast {
        color  : #08fdd8;
    }
    .container {
        display  : flex;
    
        .left-side {
            width  : 60%;

            .html-tag-h1-start {
                font-family  : ${FONTS.PRIMARY_ITALIC};
                font-size    : 18px;
                margin       : 50px 0 0 70px;
                color        : #4b4b4b;

                ${responsive.LAPTOP`
                    margin  : 20px 0 0  40px;
                `}
                ${responsive.TABLET`
                    margin  : 10px 0 0 50px;        
                `}
                ${responsive.MOBILE`
                    margin  : 10px 0 0 40px;
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
                    width   : 80%;
                    margin  : 0 0 0 70px;
                `};
                
                ${responsive.TABLET`
                    width   : 80%;
                    margin  : 0 0 0 60px;
                `}

                ${responsive.PHABLET`
                    font-size  : 14px;
                    width      : 90%;
                `}

                ${responsive.MOBILE`
                    font-size  : 12px;
                    margin     : 0 0 0 50px;
                `}
            }
        }

        .right-side {
            width  : 40%;

            .graph-div {
                width             : 100%;
                height            : 100%;
                background-color  : white;
            }
        }    
    }
`

export const SkillsAnimationWrapper = styled.div`
    display           : flex;
    margin            : 10px 0 0;
    width             : 100%;
    background-color  : #eeeeee;

    .skill-name {
        width             : 20%;
        padding           : 8px;
        text-align        : center;
        background-color  : #04c2c9;
    }

    .skill-width {
        position          : relative;

        .child-skill {
            animation         : fillSkill 3s forwards;
            position          : absolute;
            height            : 100%;

            @keyframes fillSkill {
                from {
                    width  : 0;
                    background-color : #00a1a7;
                }
                to {
                    width  : 100%;
                    background-color : #00a1a7;
                }
            }
        }
    }

    .percent {
        padding           : 8px;
        width             : 10%;
        text-align        : center;
        background-color  : #808080;
        margin            : 0 0 0 auto;
    }


`