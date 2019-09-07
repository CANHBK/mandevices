import React from 'react';
import HeaderPresentation from "../views"

import {navRoutes} from "../routes"

const HeaderController = () =>{
    return(
        <HeaderPresentation routes={navRoutes}></HeaderPresentation>
    )
}
export default HeaderController;