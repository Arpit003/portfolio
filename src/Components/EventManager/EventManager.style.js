import styled from "styled-components";
import { COLORS, FONTS } from "Styles/Constants";

import SnackbarContent from '@material-ui/core/SnackbarContent';

export const SnackbarContentWrapper = styled(SnackbarContent)`
    &.leaderboard-notitication {
        background-color    : #fff;
        padding             : 0;

        .close-icon {
            color : #a4afb7;
        }

        .notification-message {
            padding : 0;
        }

        .action-icon {
            align-self      : flex-start;
            margin-right    : 0;
        }

        .notification-wrapper {
            overflow : hidden;
            .image-container {
                .image {
                    height  : 100%;
                    width   : 100%;
                    margin-bottom: -6px;
                }
            }

            .divider{
                background  : #ebebf2;
                margin      : 0 7px;
                height      : 125px;
                width       : 1px;
            }

            .content-wrapper{
                padding: 0 10px;
                .title {
                    .text {
                        color           : ${COLORS.PRIMARY};
                        font-family     : ${FONTS.PRIMARY_BOLD};
                        font-size       : 24px;
                        margin          : 15px 0 0;
                    }
                }

                .subtitle {
                    .text {
                        color           : ${COLORS.GREY_TEXT_COLOR};
                        font-size       : 15px;
                        font-family     : ${FONTS.PRIMARY_MEDIUM};
                        margin-top      : 0px;
                        margin-bottom   : 30px;
                    }
                }

                .text-container {
                    .text { 
                        color       : ${COLORS.GREY_TEXT_COLOR};
                        font-family : ${FONTS.PRIMARY_ITALIC};
                        font-size   : 13px;
                    }
                }
            }
        }
    }
`
