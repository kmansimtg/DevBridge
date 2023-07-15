import styles from "./OptionCard.module.css";
import { BsSearch } from "react-icons/bs";
import React from 'react';


export function Optioncard(props) {
    return (
        <>
            <div className={styles.cards}>
                <div className={styles.logo}>
                    <BsSearch />
                </div>
                <div className={styles.opt}>{props.title}</div>
            </div>
        </>
    );
}