import FadeUp from "../animations/fadeup";
import Section from "../layouts/section"
import CardType3 from "../ui/card_type3";

const Accsess = () =>{
    return (
        <Section>
            <FadeUp>
                <h2 className="text-4xl md:text-5xl text-center font-bold text-(--foreground)">
                    Kemudahan Akses
                </h2>
                <p className="text-lg text-center text-(--muted-foreground) mt-5">
                    Akses mudah dari kota-kota besar
                </p>
            </FadeUp>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                <CardType3></CardType3>
                <CardType3></CardType3>
                <CardType3></CardType3>
            </div>
        </Section>
    );
}

export default Accsess