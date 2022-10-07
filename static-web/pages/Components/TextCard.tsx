import React from 'react'
import styles from '../../styles/Home.module.css'

import Image from 'next/image'
import {Profileicon} from './profileicon' 

interface PropsTypes{
    Text:string;
}

export const TextCard = ({Text}:PropsTypes) => {
  return (
    <div className={styles.rightside_card}>
            <p className={styles.rightside_text}>{Text}</p>
             <Profileicon/>
          </div>
  )
}
