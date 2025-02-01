import React from 'react'
import styles from './Videos.module.css'

const Video = () => {
    return (
        <div className={styles.container}>
            <iframe className={styles.video}
                width="300"
                height="315"
                src="https://www.youtube.com/embed/-OqjS7QJJyk?si=Rxl_fkIlm3erwClp"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen="true">
            </iframe>
        </div>
    )
}

export default Video