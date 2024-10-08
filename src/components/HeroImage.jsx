"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export function HeroImage() {
    const images = [
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.pexels.com/photos/2127022/pexels-photo-2127022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6872156/pexels-photo-6872156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6873186/pexels-photo-6873186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6872172/pexels-photo-6872172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13627457/pexels-photo-13627457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "/meguiars.jpg",
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    THE ULTIMATE DETAILING BOX
                </motion.p>
                <motion.p className="font-bold text-md md:text-md text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Discover high-performance detailing products tailored for car enthusiasts.
                </motion.p>
                <button onClick={() => { document.getElementById('products').scrollIntoView({ behavior: 'smooth' }) }} className="px-4 py-2 backdrop-blur-sm border bg-red-300/20 border-red-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-[rgb(255,47,47)] transition duration-700 ease-in-out">
                    <span>View Products →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider >
    );
}
