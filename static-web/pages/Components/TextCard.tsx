import React from 'react'
import styles from '../../styles/Home.module.css'
import profile_icon from '../../public/profile_icon.webp'
import Image from 'next/image'

export const TextCard = () => {
  return (
    <div className={styles.rightside_card}>
            <p className={styles.rightside_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>
            <div className={styles.profile_icon_text_container}>
              <div className={styles.image_container}>
              <Image className={styles.roundimage} src={profile_icon}></Image>
              </div>
              <h4 className={styles.nametext}>UserName LastName</h4>
            </div>
          </div>
  )
}
