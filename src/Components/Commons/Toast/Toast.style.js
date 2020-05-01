import styled from "styled-components";
// import { COLORS, FONTS } from "Styles/Constants";

import SnackbarContent from '@material-ui/core/SnackbarContent';

export const SnackbarContentWrapper = styled(SnackbarContent)`
    &.themed {
        background-color: #fff;
        padding-left    : 30px;

        .notification-message {
            color       : #000;
            font-size   : 15px;
            max-width   : calc(100% - 75px);
        }

        .close-icon {
            color : #a4afb7;
        }
    }
`