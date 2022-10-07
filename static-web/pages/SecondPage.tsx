import React from 'react'
import styles from '../styles/Home.module.css'
import { Profileicon } from './Components/profileicon'
import boat from './../public/boat.jpg'
import Image from 'next/image'
const SecondPage = () => {
  return (
    <div className={styles.secondPage_container} >
        <h4 className={styles.heading}>From Server-side Rendering to Static Generation</h4>
        <div className={styles.profileicon_container}>
            <Profileicon/>
        </div>
        <div className={styles.coverimage_container}>
           <Image src={boat}></Image>
        </div>
        < div className={styles.paragraph_container}>
            <p className={styles.rightside_text}>Posted June 2, 2022underUncategorized</p>
            <p className={styles.rightside_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>
            <p className={styles.rightside_text}>This is a button block</p>
            <p className={styles.rightside_text}>Left aligned paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>
        </div>
    </div>
  )
}
export default SecondPage;
