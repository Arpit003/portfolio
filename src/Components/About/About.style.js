import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const AboutWrapper = styled.div`
    color     : white;
    overflow-x : hidden;
    height    : 100vh;
    
    .start-tag {
        padding  : 70px 0 0;
    }

    .end-tag {
        /* position  : absolute; */
        /* bottom    : 20px; */
    }

    .blast {
        color  : #08fdd8;
    }

    .container {
        margin     : 5% 0;
        
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
            flex-wrap  : wrap;

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


            /* CIRCLE LOGIC */
            .circle {
                margin    : 0 auto;

                animation-name       : fadeInUp;
                opacity              : 0;
                animation-duration   : 6s;
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
        
                ${responsive.PHABLET`
                    width     : 100%;
                    overflow  : hidden;
                    padding   : 0 0 20px 0;
                `}                
                .parent {
                    width          : 500px;
                    height         : 500px;
                    border-radius  : 50%;
                    border         : dashed;
                    animation      : rotation 30s infinite linear;
                    margin         : -200px 0 0 80px;

                    ${responsive.DESKTOP`
                        width   : 400px;
                        height  : 400px;
                        margin  : -100px 0 0 150px;
                    `}
                    
                    ${responsive.DESKTOP`
                        margin  : -100px 0 0 100px;
                    `}

                    ${responsive.TABLET`
                        width   : 300px;
                        height  : 300px;
                        margin  : 10px 0 0 90px;
                    `}

                    ${responsive.PHABLET`
                        margin  : 30px auto 0;
                    `}

                    ${responsive.MOBILE`
                        width   : 240px;
                        height  : 240px;
                    `}

                @keyframes rotation {
                    from {
                        transform  : rotate(0deg);
                    }
                    to {
                        transform  : rotate(359deg);
                    }
                }

                .image-position {
                    width       : 125px;
                    height      : 125px;

                    ${responsive.DESKTOP`
                        width   : 100px;
                        height  : 100px;
                    `}

                    ${responsive.TABLET`
                        height  : 75px;
                        width   : 75px;
                    `}

                    ${responsive.MOBILE`
                        height  : 60px;
                        width   : 60px;
                    `}
                    
                    .common {
                        width                : 100%;
                        height               : 100%;
                        border-radius        : 50%;
                        background-position  : center;
                        background-repeat    : no-repeat;
                        background-size      : cover;
                        animation            : rotate-reverse 30s infinite linear;
                        
                        &.react {
                            transform            : translate(346%,143%);
                        }
                        &.node {
                            transform            : translate(-43%,-48%);
                            rotate               : -1deg;
                        }
                        &.css {
                            transform            : translate(150%,-350%);
                        }
                        &.js {
                            transform            : translate(144%,253%);
                        }
                    }
                }

                .profile {
                    width                : 250px;
                    height               : 250px;
                    background-color     : red;
                    margin               : 0 auto;
                    border-radius        : 50%;
                    position             : relative;
                    background-repeat    : no-repeat;
                    background-size      :cover;
                    background-position  :center;
                    animation            : profile 30s infinite linear;

                    ${responsive.DESKTOP`
                        width   : 200px;
                        height  : 200px;
                    `}

                    ${responsive.TABLET`
                        width   : 150px;
                        height  : 150px;
                    `};

                    ${responsive.MOBILE`
                        width   : 120px;
                        height  : 120px;
                    `};

                    @keyframes profile {
                        from {
                            transform  : rotate(359deg);
                        }
                        to {
                            transform  : rotate(0deg);
                        }
                    }

                }
            }
        }
    }

        /* TRIANGLE LOGIC */
        /* #pyramid {
            transform-origin  : 116px 200px 116px;
            animation         : spin 10s linear infinite;
            transform-style   : preserve-3d;
            margin            : -100px 0px 0 300px;
            
            ${responsive.DESKTOP`
                margin  : -100px 0 0 250px;
            `}

            ${responsive.LAPTOP`
                display  : none;
            `}

            div {
                border-width      : 200px 0 200px 346px;
                position          :absolute;
                transform-origin  : 0 0;
                border-style      : solid;

                ::after {
                    color       : #fff;
                    left        : -311px;
                    top         : -69px;
                    text-align  : center;
                    opacity     : 0.6s
                }
            }
            
            div:first-child {
                border-color  : transparent transparent transparent rgba(50,50,50,.6);
                transform     : rotateY(-19.5deg) rotateX(180deg) translateY(-400px);

                ::after {
                    content   : url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo2.png);
                    position  : absolute;

                }
            }

            div:nth-child(2){
                border-color  : transparent transparent transparent rgba(50,50,50,.6);
                transform     : rotateY(90deg) rotateZ(60deg) rotateX(180deg) translateY(-400px);

                ::after {
                    content   : url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo2.png);
                    position  : absolute;

                }
            }

            div:nth-child(3){
                border-color  : transparent transparent transparent rgba(50,50,50,.9);
                transform     : rotateX(60deg) rotateY(19.5deg);

                ::after {
                    content   : url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo3.png);
                    position  : absolute;

                }
            }

            div:nth-child(4){
                border-color  : transparent transparent transparent rgba(50,50,50,.8);
                transform     : rotateX(-60deg) rotateY(19.5deg) translateX(-116px) translateY(-200px) translateZ(326px);

                ::after {
                    content   : url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo1.png);
                    position  : absolute;

                }
            }
        }

        @keyframes spin {
            from {
                transform  : rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            }
            to {
                transform  : rotateX(360deg) rotateY(360deg) rotateZ(360deg);
            }
        } */
    }
`