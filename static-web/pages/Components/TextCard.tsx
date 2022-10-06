import React from 'react'
import styles from '../../styles/Home.module.css'
import profile_icon from '../../public/profile_icon.webp'
import Image from 'next/image'

interface PropsTypes{
    Text:string;
}

export const TextCard = ({Text}:PropsTypes) => {
  return (
    <div className={styles.rightside_card}>
            <p className={styles.rightside_text}>{Text}</p>
            <div className={styles.profile_icon_text_container}>
              <div className={styles.image_container}>
              <Image className={styles.roundimage} src={profile_icon}></Image>
              </div>
              <h4 className={styles.nametext}>UserName LastName</h4>
            </div>
          </div>
  )
}
