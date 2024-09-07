import Image from 'next/image'
import React from 'react'
import styles from './Title.module.css'

const ImageCards = () => {
    return (
        <>
            <p id="showcase" className={styles.sectionHeader}>SHOWCASE</p>
            <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px' }}>
                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <div className="col">
                        <div className="card" style={{ height: '300px', overflow: 'hidden' }}>
                            <Image
                                src="/soap.jpg"
                                alt="Image description"
                                width={1500}
                                height={500}
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ height: '300px', overflow: 'hidden' }}>
                            <Image
                                src="/microfiber-car-cleaning-towel-500x500.webp"
                                alt="Image description"
                                width={1500}
                                height={500}
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ height: '300px', overflow: 'hidden' }}>
                            <Image
                                src="/cleaningtires.jpg"
                                alt="Image description"
                                width={1500}
                                height={500}
                                objectFit="contain"
                            />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{ height: '300px', overflow: 'hidden' }}>
                            <Image
                                src="/creamiccoating.jpg"
                                alt="Image description"
                                width={1500}
                                height={500}
                                objectFit="contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ImageCards
