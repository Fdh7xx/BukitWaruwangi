"use client"
import FadeUp from "@/components/animations/fadeup";
import Section from "@/components/layouts/section"
import CardType1 from "../ui/card_type_1";

// icons
import { Mountain, Sunrise, MapPin } from "lucide-react";


export default function About (){
    return (
        <Section>
            <div
                id="test"
                className="flex flex-col items-center gap-5 scroll-mt-[150px] ">
                <FadeUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-(--foreground) text-center">
                        Selamat datang di Bukit Waruwangi
                    </h2>
                </FadeUp>
                <FadeUp>
                    <p className="text-lg max-w-4xl text-center text-(--muted-foreground)">
                        Bukit Waruwangi merupakan destinasi wisata alam di
                        Banten yang menghadirkan pengalaman rekreasi di tengah
                        hamparan perbukitan hijau. Dengan suasana yang tenang,
                        udara segar, dan panorama terbuka, tempat ini menjadi
                        pilihan ideal bagi pengunjung yang mencari relaksasi
                        maupun aktivitas luar ruang.
                    </p>
                </FadeUp>
            </div>
                <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <CardType1
                        title="Keindahan Alami"
                        description="Perbukitan bergelombang yang ditutupi rumput hijau cerah, dikelilingi oleh alam murni">
                        <Mountain className="size-10" />
                    </CardType1>
                    <CardType1
                        title="Lokasi Strategis"
                        description="Mudah dijangkau dari Jakarta dan berada di kawasan Banten yang indah">
                        <MapPin className="size-10" />
                    </CardType1>
                    <CardType1
                        title="Aktivitas Luar Ruangan"
                        description="Berkemah, trekking, fotografi, dan lebih banyak petualangan menanti Anda">
                        <Sunrise className="size-10" />
                    </CardType1>
                </div>
        </Section>
    );
}