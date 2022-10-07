import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import profile_icon from '../../public/profile_icon.webp'


export const Profileicon = () => {
  return (
    <div className={styles.profile_icon_text_container}>
              <div className={styles.image_container}>
              <Image className={styles.roundimage} src={profile_icon}></Image>
              </div>
              <h4 className={styles.nametext}>UserName LastName</h4>
            </div>
  )
}
