"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
    return (
        (<div
            className="h-[20rem] mt-20 flex flex-col antialiased bg-gray-500 items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards color="gray-500" items={testimonials} direction="right" speed="slow" />
        </div>)
    );
}

const testimonials = [
    {
        quote:
            "Experience the ultimate in car care with our premium detailing kit. Specially formulated to deliver a deep, glossy finish, it effortlessly removes dirt, grime, and minor imperfections, leaving your vehicle looking brand new. The advanced protective coating ensures long-lasting shine and guards against the elements, keeping your car pristine for weeks.",
        title: "Performance-Reviewed",
    },
    {
        quote:
            "Crafted with the finest materials, our car detailing kit delivers professional results every time. The high-quality polish is designed to enhance your car’s natural shine, while the premium microfiber towels ensure a scratch-free finish. Our protective sealant uses advanced polymers to create a durable barrier against dirt, water, and UV damage.",
        title: "Top-Tier Materials",
    },
    {
        quote: "Elevate your detailing routine with a kit that redefines car care. Engineered to provide superior results, our advanced formula restores your vehicle’s brilliance while protecting it from everyday wear. The easy-application polish revives the paint’s depth and clarity, and the protective coating forms an invisible shield against the elements.",
        title: "Redefining Car Care",
    },
    {
        quote:
            "Transform your car’s appearance with a detailing kit that unleashes the ultimate shine. Our precision-engineered formula removes stubborn dirt and blemishes, revealing a sleek, mirror-like finish. The included sealant provides unmatched protection, keeping your car looking pristine in any weather.",
        title: "Unleash the Ultimate Shine",
    },
    {
        quote:
            "Take your car’s appearance to the next level with a detailing kit that delivers superior results. The expertly formulated polish enhances your vehicle’s natural gloss, while the advanced protection technology guards against dirt, debris, and UV rays.",
        title: "Elevate Your Car’s Finish",
    },
];
