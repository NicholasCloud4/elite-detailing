import Image from 'next/image'
import React from 'react'

const ImageCards = () => {
    return (
        <>
            <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px', paddingTop: '100px' }}>
                <div class="row row-cols-1 row-cols-md-2 g-4">

                    <div class="col">
                        <div class="card">
                            <Image src="/soap.jpg" alt="Image description" width={1500} height={500} />
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <Image src="/microfiber-car-cleaning-towel-500x500.webp" alt="Image description" width={1000} height={500} />
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <Image src="/cleaningtires.jpg" alt="Image description" width={1500} height={200} />
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <Image src="/creamiccoating.jpg" alt="Image description" width={1500} height={500} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCards