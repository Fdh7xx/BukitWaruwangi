import type { LucideProps } from "lucide-react";
import Section from "../layouts/section"
import CardType2 from "../ui/card_type_2";
import { fasility} from "@/types";
import * as Icons from "lucide-react";
import FadeUp from "../animations/fadeup";

type iconComponent = React.ComponentType<LucideProps>
const Fasility = ({data} : {data : fasility[]}) =>{
    return (
        <Section>
            <FadeUp>    
                <h2 className="text-4xl md:text-5xl font-bold text-(--foreground) text-center">
                    Fasilitas Yang Tersedia
                </h2>
                <p className="text-lg text-center text-(--muted-foreground) mt-5">
                    Semua yang Anda butuhkan untuk kunjungan yang nyaman
                </p>
            </FadeUp>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                {data.map((item)=>{
                    const Icon = Icons[item.icon] as iconComponent;
                    return (
                        <CardType2 key={item.id} name={item.name}>
                            <Icon className="size-10" />
                        </CardType2>
                    );
                })}
                </div>    
        </Section>
    );
}

export default Fasility