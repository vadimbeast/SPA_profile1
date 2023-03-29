import React from "react";
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
           <div className={s.dialogsItems}>
               <div className={s.dialog + ' ' + s.active}>
                   Masha
               </div>
               <div className={s.dialog}>
                   Max
               </div>
               <div className={s.dialog}>
                   Mama
               </div>
               <div className={s.dialog}>
                   Papa
               </div>
               <div className={s.dialog}>
                   Sasha
               </div>
               <div className={s.dialog}>
                   Misha
               </div>
           </div>
           <div className={s.messages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>How are you?</div>
               <div className={s.message}>YO!</div>    
           </div>
        </div>
    );
}

export default Dialogs;