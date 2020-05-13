import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const SkillsWrapper = styled.div`
    color     : white;
    overflow  : hidden;
    height    : 100%;

    .start-tag {
        position  : absolute;
    }   

    .end-tag {
        position  : absolute;
        bottom    : 20px;
    }

    .blast {
        color  : #08fdd8;
    }

    .container {
        top        : 50%;
        position   : absolute;
        transform  : translate(0,-50%);

        ${responsive.TABLET`
            top  : 60%;
        `}

        ${responsive.MOBILE`
            top  : 50%;
        `}

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
        .middle-section {
            display    : flex;
            /* flex-wrap  : wrap; */

            .paragraph {
                flex-direction       : row;
                width                : 40%;
                letter-spacing       : 1px;
                font-family          : ${FONTS.PRIMARY_LIGHT};
                margin               : 0 0 0 90px;
                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 3s;
                animation-fill-mode  : both;

                @keyframes fadeInUp {
                    from {
                        opacity    : 0;
                        transform  : translate3d(0,40px,0)
                    }
                    50% {
                        opacity  : 0.5;
                    }
                    to {
                        transform  : translate3d(0,0,0);
                        opacity    : 1;
                    }
                }

                ${responsive.LAPTOP`
                    width   : 30%;
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

            .main-container {
                /* width    : 50%; */
                transform  : translate(-1%,-9%);
                rotate     : -35deg;

                .section {
                    display  : flex;
                    margin   : 10px 0;

                    &:nth-child(2){
                        transform : translate(7%,0);
                    }
                    &:nth-child(3){
                        transform  : translate(-11%,0);
                    }
                    &:nth-child(4){
                        transform  : translate(-4%,0);
                    }

                    .partition {
                        width    : 400px;
                        display  : flex;
                        height   : 120px;
                        margin   : 0 auto;

                        .square {
                            width             : 140px;
                            background-color  : white;
                            margin            : 0 5px;
                            border            : 5px solid green;
                        }

                        .description {
                            width             : calc(100% - 140px);
                            background-color  : red;
                            margin            : 0 5px;
                            position          : relative;
                            border-left       : 4px solid white;

                            &.rotate {
                                rotate  : 180deg;
                            }

                            &:before {
                                position    : absolute;
                                content     : "";
                                top         : 0;
                                left        : 0;
                                width       : 70%;
                                border-top  : 4px solid white;
                            }
                            &:before {
                                position       : absolute;
                                content        : "";
                                bottom         : 0;
                                left           : 0;
                                width          : 80%;
                                border-bottom  : 4px solid white;
                            }
                        }
                    }
                }
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