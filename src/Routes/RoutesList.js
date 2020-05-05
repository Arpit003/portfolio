import LazyLoader from '@loadable/component'

import { URL_HOME, URL_ABOUT } from "Helpers/Paths";

export default [
    {
        path: "/",
        exact: true,
        component: LazyLoader(() => import('Components/Home/Home'))
    }, {
        path: URL_HOME,
        exact: true,
        component: LazyLoader(() => import('Components/Home/Home'))
    }, {
        path: URL_ABOUT,
        exact: true,
        component: LazyLoader(() => import('Components/About/About'))
    }
]
