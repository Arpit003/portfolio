import LazyLoader from '@loadable/component'

import { URL_HOME, URL_ABOUT, URL_SKILLS, URL_CONTACT } from "Helpers/Paths";

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
    }, {
        path: URL_SKILLS,
        exact: true,
        component: LazyLoader(() => import('Components/Skills/Skills'))
    }, {
        path: URL_CONTACT,
        exact: true,
        component: LazyLoader(() => import('Components/Contact/Contact'))
    }

]
