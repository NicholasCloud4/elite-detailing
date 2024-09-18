import Image from 'next/image'
import React from 'react'
import styles from './Title.module.css'

const ImageCards = () => {
    return (
        <>
            <p id="showcase" className={styles.sectionHeader}>Showcase</p>
            <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px' }}>
                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div className="card" style={{ height: '400px', overflow: 'hidden' }}>
                            <Image
                                src="/wash.webp"
                                alt="Image description"
                                layout='fill'
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ height: '400px', overflow: 'hidden' }}>
                            <Image
                                src="/towel.webp"
                                alt="Image description"
                                layout='fill'
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ height: '400px', overflow: 'hidden' }}>
                            <Image
                                src="/wheels.png"
                                alt="Image description"
                                objectFit="cover"
                                width={1500}
                                height={500}
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ height: '400px', overflow: 'hidden' }}>
                            <Image
                                src="/interior.jpg"
                                alt="Image description"
                                layout='fill'
                                objectFit="cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ImageCards
