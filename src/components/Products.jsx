import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbWheel } from "react-icons/tb";
import { PiSeatFill } from "react-icons/pi";
import { PiSprayBottleFill } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
import { PiTowelFill } from "react-icons/pi";
import { MdOutlineWaves } from "react-icons/md";
import styles from './Title.module.css';

const Products = () => {
    return (
        <>
            <p className={styles.sectionHeader}>Products Included</p>
            <div style={{ display: 'flex', marginLeft: '20px', marginRight: '20px' }}>
                <div class="row row-cols-1 row-cols-md-3 g-4">

                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <IoCarSport size={30} />
                                    <h5 class="card-title">&nbsp;Ultimate Wash & Wax</h5>
                                </div>
                                <p class="card-text">Ultimate Wash and Wax is the perfect way to not only clean, but also boost your protection, glossiness and add shine to your car&apos;s finish in-between regular waxing.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <PiSeatFill size={30} />
                                    <h5 class="card-title">Quick Interior Detailer</h5>
                                </div>
                                <p class="card-text">The fastest way to clean all interior surfaces. Use every time you wash or Quik Detail to give your interior that &ldquo;just detailed&ldquo; look. In just 5 additional minutes, your entire interior will look sharp and smell fresh.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <PiSprayBottleFill size={30} />
                                    <h5 class="card-title">&nbsp;Glass Cleaner</h5>
                                </div>
                                <p class="card-text">This unique formula spreads and wipes off quickly, with superior cleaning ability to tackle even the dirtiest glass. Easily removes vinyl fog residue, road grime, smokers film, bird droppings and bug splatter. Use what the pros use for streak-free clarity!</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <TbWheel size={30} />
                                    <h5 class="card-title">&nbsp;Wheel Cleaner</h5>
                                </div>
                                <p class="card-text">This advanced chemistry blends road grime attacking surfactants with active brake dust dissolving agents. The deep-cleaning gel formula turns brake dust purple and road grime brown as it gently loosens stubborn contaminants. And since it’s acid free and pH balanced this wheel cleaner is safe and effective for all wheel finishes and painted brake components.</p>

                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <MdOutlineWaves size={30} />
                                    <h5 class="card-title">&nbsp;Cermaic Coating</h5>
                                </div>
                                <p class="card-text">This cutting-edge formula allows you to get the benefits of ultra-durable protection that increases gloss and slickness with unbelievable water beading, but it doesn&apos;t require a complicated process to apply or remove. One of the benefits of this coating is that it will conceal light paint defects.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <PiTowelFill size={30} />
                                    <h5 class="card-title">&nbsp;Microfiber Towel</h5>
                                </div>
                                <p class="card-text">Reduces drying time with less wring-outs by absorbing up to two times the water of traditional terry towels.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Products;
