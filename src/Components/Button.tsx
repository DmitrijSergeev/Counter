import React from 'react';
type PropsType = {
    title:string
    callBack:()=>void
}

export const Button = (props:PropsType) => {
    const onClickHandler = ()=>{
        props.callBack()
    }
    return (
        <div>
            <button onClick={ onClickHandler }>{props.title}</button>
        </div>
    );
};
