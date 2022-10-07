import React from 'react'
import seaimage from '../../public/sea.jpg'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import  {TextCard} from '../Components/TextCard'
interface PropsTypes{
    title:string;
    date:string;
    Text:string;
}

export const ImageTextCard = ({title,date,Text}:PropsTypes) => {
    
  return (
    <div className={styles.image_card_container}>
        <div className={styles.seaimage_container}>
        <Image src={seaimage}></Image>
        </div>
        <h3 className={styles.imagecard_title_text} >{title}</h3>
        <h5 className={styles.date}>{date}</h5>
        <TextCard
        Text={Text}
        />
        
    </div>
  )
}
