import React from 'react';
import s from './Counter.module.css'

type CounterType = {
    title: string
    num: number
    reset: () => void
    increment: () => void
}

export const Counter = (props: CounterType) => {
    const onClickIncrementHandler = () => {
        props.increment()
    }
    const onClickResetHandler = () => {
        props.reset()
    }

    return (
        <div>
            <div className={s.counter}>
                <h2 className={s.title}>{props.title}</h2>

                <div className={s.num}>{props.num}</div>

                <div className={s.box}>
                    <button className={s.inc}
                            onClick={onClickIncrementHandler}>Inc
                    </button>
                    <button className={s.reset}
                            onClick={onClickResetHandler}>Reset
                    </button>
                </div>
            </div>
        </div>
    );
};
