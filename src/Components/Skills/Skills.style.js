import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const SkillsWrapper = styled.div`
    color     : #F5FFFA;
    overflow  : hidden;
    height    : 100%;

    .start-tag {
        position  : absolute;
    }   

    .end-tag {
        position  : absolute;
        bottom    : 20px;

        ${responsive.TABLET`
            margin    : 0 0 -50%;
        `}
        ${responsive.MOBILE`
            margin    : 0 0 -65%;
        `}
    }

    .blast {
        color  : #08fdd8;
    }

    .container {
        top        : 50%;
        position   : absolute;
        transform  : translate(0,-50%);
        margin     : 20px 0 0;
        
        ${responsive.TABLET`
            top     : 60%;
            margin  : 10% 0 0;
        `}

        ${responsive.MOBILE`
            top     : 50%;
            margin  : 35% 0 0;
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

            ${responsive.TABLET`
                flex-wrap  : wrap;
            `}
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
                    width      : 80%;
                `}

                ${responsive.MOBILE`
                    font-size  : 12px;
                    margin     : 0 0 0 50px;
                `}
            }

            .main-container {
                transform  : translate(-1%,-9%);
                rotate     : -35deg;

                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 1s;
                animation-fill-mode  : both;

                ${responsive.LAPTOP`
                    transform  : translate(-1%,3%);
                `};
                ${responsive.TABLET`
                    margin  : 0 auto;
                `}
                ${responsive.PHABLET`
                    margin     : 0 auto;
                    transform  : translate(-2%,0%);
                `}
                ${responsive.MOBILE`
                    rotate     : 0deg;
                    width      : 100%;
                    transform  : none;
                `}


                .section {
                    display  : flex;
                    margin   : 10px 0;

                    ${responsive.MOBILE`
                        flex-wrap  : wrap;
                        margin     : 5px 0;
                    `};

                    &:nth-child(1){
                        animation-name       : child1;
                        animation-duration   : 3s;
                        animation-fill-mode  : forwards;

                        @keyframes child1 {
                            from {
                                transform  : translate(10% ,0);
                            }
                            25% {
                                transform  : translate(15% ,0);
                            }
                            50%{
                                transform  : translate(-10% ,0);
                            } 
                            to {
                                transform : none;
                            }
                        }

                        ${responsive.MOBILE`
                            rotate  : 180deg;
                        `}
                    };

                    &:nth-child(2){
                        animation-name       : child2;

                        ${responsive.MOBILE`
                            animation  : none;
                        `}

                        animation-duration   : 3s;
                        animation-fill-mode  : forwards;

                        @keyframes child2 {
                            from {
                                transform  : translate(-10% ,0);
                            }
                            25% {
                                transform  : translate(-20% ,0);
                            }
                            50%{
                                transform  : translate(20% ,0);
                            } 
                            to {
                                transform : translate(7%,0);
                            }
                        }

                        ${responsive.MOBILE`
                            transform  : none;
                        `}
                    }

                    &:nth-child(3){
                        animation-name       : child3;

                        ${responsive.MOBILE`
                            animation  : none;
                        `}

                        animation-duration   : 3s;
                        animation-fill-mode  : forwards;

                        @keyframes child3 {
                            from {
                                transform  : translate(10% ,0);
                            }
                            25% {
                                transform  : translate(20% ,0);
                            }
                            50%{
                                transform  : translate(-20% ,0);
                            } 
                            to {
                                transform : translate(-11%,0);
                            }
                        }

                        ${responsive.MOBILE`
                            transform  : none;
                        `}
                    }

                    &:nth-child(4){
                        animation-name       : child4;
                        animation-duration   : 3s;
                        animation-fill-mode  : forwards;

                        ${responsive.MOBILE`
                            rotate     : 180deg;
                            transform  : none;
                        `}

                        @keyframes child4 {
                            from {
                                transform  : translate(-10% ,0);
                            }
                            25% {
                                transform  : translate(-15% ,0);
                            }
                            50%{
                                transform  : translate(10% ,0);
                            } 
                            to {
                                transform : translate(0 ,0);
                            }
                        }
                    }

                    .partition {
                        width    : 400px;
                        display  : flex;
                        height   : 120px;
                        margin   : 0 auto;

                        ${responsive.LAPTOP`
                            width   : 290px;
                            height  : 100px;
                        `};

                        ${responsive.TABLET`
                            width  : 250px;
                        `}

                        ${responsive.PHABLET`
                            width  : 240px;
                        `}

                        ${responsive.MOBILE`
                            width  : 80%;
                            margin  : 5px auto;
                        `}


                        .square {
                            width                : 140px;
                            background-color     : white;
                            margin               : 0 5px;
                            /* border               : 5px solid green; */

                            ${responsive.LAPTOP`
                                width  : 120px;
                            `}
                        }

                        .description {
                            width             : calc(100% - 140px);
                            background-color  : transparent;
                            margin            : 0 5px;
                            position          : relative;
                            border-left       : 4px solid #F5FFFA;

                            ${responsive.LAPTOP`
                                width  : calc(100% - 70px);                            
                            `}
                            &.rotate {
                                rotate  : 180deg;
                            }

                            &:before {
                                position             : absolute;
                                content              : "";
                                top                  : 0;
                                left                 : 0;
                                width                : 70%;
                                border-top           : 4px solid #F5FFFA;
                                animation-name       : borderLine;
                                animation-duration   : 3s;
                                animation-fill-mode  : both;

                                @keyframes borderLine {
                                   from {
                                       width  : 0%;
                                   } 
                                   to {
                                       width  : 70%;
                                   }
                                }
                            }
                            &:before {
                                position       : absolute;
                                content        : "";
                                bottom         : 0;
                                left           : 0;
                                width          : 80%;
                                border-bottom  : 4px solid #F5FFFA;
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