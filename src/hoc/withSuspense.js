import React, { Suspense }  from "react";
import Preloader from "../components/common/Preloader/Preloader";
import DialogsContainer from "../components/Dialogs/DialogsContainer";


export const withSuspense = (Component) => (props) => {
    return (
        <Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </Suspense>
    );
}  