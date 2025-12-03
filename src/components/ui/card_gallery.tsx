"use client"
import Image from "next/image"
import FadeUp from "../animations/fadeup"
import { useState } from "react"
import { galleryType } from "@/types"

const CardGallery = (props : galleryType) =>{

    const [isHovered, setIsHovered] = useState(false);
    const overlay =  isHovered ? "opacity-100" : "opacity-0";
    const textOverlay = isHovered ?  "bottom-5" : "-bottom-40";
    const imgOverlay = isHovered ? "scale-110" : "scale-100";
    
    return (
        <FadeUp>
            <div
                className="rounded-lg overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="relative">
                    {props.img ? (
                        <Image
                            src={props.img}
                            width={400}
                            height={0}
                            alt=""
                            className={`${imgOverlay} duration-300`}
                        />
                    ) : null}
                    <div className={`absolute left-2 md:left-5 z-20 ${textOverlay} duration-300 flex flex-col gap-2`}>
                        <span className="text-lg md:text-2xl font-bold text-white">{props.title}</span>
                        <span className=" text-sm md:text-base text-[#dddddd]">{props.description}</span>
                    </div>
                    <div
                        className={`absolute inset-0 bg-linear-to-b from-transparant to-(--foreground) ${overlay} duration-300 `}
                    />
                </div>
            </div>
        </FadeUp>
    );

}

export default CardGallery