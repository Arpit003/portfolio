import LazyLoader from '@loadable/component'

import { URL_DASHBOARD, URL_USER } from "Helpers/Paths";

export default  [
    {
        path        :   "/",
        exact       :   true,
        component   :   LazyLoader(() => import('Components/Dashboard/Dashboard'))
    }, {
        path        :   URL_DASHBOARD,
        exact       :   true,
        component   :   LazyLoader(() => import('Components/Dashboard/Dashboard'))
    } , {
        path        :   URL_USER,
        exact       :   true,
        component   :   LazyLoader(() => import('Components/User/User'))
    }
]
