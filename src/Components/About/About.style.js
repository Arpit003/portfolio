import styled from 'styled-components';
import { FONTS, responsive } from 'Styles/Constants';

export const AboutWrapper = styled.div`
    color  : white;
    overflow : hidden;

    .html-tag-h1-start {
        font-family  : ${FONTS.PRIMARY_ITALIC};
        font-size    : 18px;
        margin       : 130px 0 0 70px;
        color        : #4b4b4b;

        ${responsive.TABLET`
            margin  : 120px 0 0 50px;        
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

    .blast {
        color  : #08fdd8;
    }

    .middle-section {
        display    : flex;
        flex-wrap  : wrap;

        .paragraph {
            flex-direction       : row;
            width                : 500px;
            letter-spacing       : 1px;
            font-family          : ${FONTS.PRIMARY_LIGHT};
            margin               : 0 0 0 70px;
            animation            : fadeIn 3s;
            opacity              : 0;
            animation-delay      : 2s;
            animation-fill-mode  : forwards;

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            ${responsive.PHABLET`
                font-size  : 16px;
                margin     : 0 0 0 50px;
                width      : 400px;
            `}

            ${responsive.MOBILE`
                font-size  : 14px;
                width      : 300px;
                margin     : 0 0 0 30px;
            `}
        }

        /* TRIANGLE LOGIC */
        #pyramid {
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
                    content   : url(//jacekjeznach.com/wp-content/themes/jj/css/../img/logo1.png);
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
        }
    }
`