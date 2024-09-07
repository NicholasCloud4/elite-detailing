import { HoverEffect } from "./ui/card-hover-effect";
import { TbWheel } from "react-icons/tb";
import { PiSeatFill } from "react-icons/pi";
import { PiSprayBottleFill } from "react-icons/pi";
import { IoCarSport } from "react-icons/io5";
import { PiTowelFill } from "react-icons/pi";
import { MdOutlineWaves } from "react-icons/md";
import styles from "./Title.module.css";

export function ProductsHover() {
    return (
        <>
            <p className={styles.sectionHeader}>Products Included</p>
            <div className="w-500 mx-0 px-4">
                <HoverEffect items={projects} />
            </div>
        </>
    );
}
export const projects = [
    {
        title: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <IoCarSport size={30} style={{ marginRight: '10px' }} />
                Ultimate Wash & Wax
            </div>
        ),
        description:
            "Ultimate Wash and Wax is the perfect way to not only clean, but also boost your protection, glossiness and add shine to your car's finish in-between regular waxing.",
        link: "https://netflix.com",
    },
    {
        title: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PiSeatFill size={30} style={{ marginRight: '10px' }} />
                Quick Interior Detailer
            </div>
        ),
        description:
            "The fastest way to clean all interior surfaces. Use every time you wash or Quik Detail to give your interior that just detailed look. In just 5 additional minutes, your entire interior will look sharp and smell fresh.",
        link: "https://netflix.com",
    },
    {
        title: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PiSprayBottleFill size={30} style={{ marginRight: '10px' }} />
                Glass Cleaner
            </div>
        ),
        description:
            "This unique formula spreads and wipes off quickly, with superior cleaning ability to tackle even the dirtiest glass. Easily removes vinyl fog residue, road grime, smokers film, bird droppings and bug splatter. Use what the pros use for streak-free clarity!",
        link: "https://netflix.com",
    },
    {
        title: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <TbWheel size={30} style={{ marginRight: '10px' }} />
                Wheel Cleaner
            </div>
        ),
        description:
            "This advanced chemistry blends road grime attacking surfactants with active brake dust dissolving agents. The deep-cleaning gel formula turns brake dust purple and road grime brown as it gently loosens stubborn contaminants. And since it’s acid free and pH balanced this wheel cleaner is safe and effective for all wheel finishes and painted brake components.",
        link: "https://netflix.com",
    },
    {
        title: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MdOutlineWaves size={30} style={{ marginRight: '10px' }} />
                Ceramic Coating
            </div>
        ),
        description:
            "This cutting-edge formula allows you to get the benefits of ultra-durable protection that increases gloss and slickness with unbelievable water beading, but it doesn't require a complicated process to apply or remove. One of the benefits of this coating is that it will conceal light paint defects.",
        link: "https://netflix.com",
    },
    {
        title: (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PiTowelFill size={30} style={{ marginRight: '10px' }} />
                Microfiber Towel
            </div>
        ),
        description:
            "Reduces drying time with less wring-outs by absorbing up to two times the water of traditional terry towels.",
        link: "https://netflix.com",
    },
];
