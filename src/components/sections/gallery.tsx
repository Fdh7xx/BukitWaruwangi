"use client"
import FadeUp from "../animations/fadeup";
import Section from "@/components/layouts/section"
import CardGallery from "../ui/card_gallery";

import { galleryType } from "@/types";

const Gallery = ({data} : {data : galleryType[]}) =>{
    return (
        <Section className="" bg="bg-[#fcfcfc]">
            <FadeUp>
                <h2 className="text-4xl md:text-5xl text-center font-bold text-(--foreground)">
                    Keindahan Tak Terlupakan
                </h2>
                <p className="text-lg text-(--muted-foreground) text-center mt-5">
                    Benamkan diri Anda dalam keindahan alam Bukit Waruwangi
                </p>
            </FadeUp>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 mt-10">
                {data.map((item)=>
                    <CardGallery key={item.id} id={item.id} img={item.img} title={item.title} description={item.description}/>
                )}
            </div>
        </Section>
    );
}

export default Gallery