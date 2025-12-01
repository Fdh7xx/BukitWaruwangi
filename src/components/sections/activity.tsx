import Section from "../layouts/section"
import CardType1 from "../ui/card_type_1";

const Activity = () =>{
    return (
        <Section>
            <h2 className="text-center text-(--foreground) text-4xl md:text-5xl font-bold">
                Berbagai Aktivitas
            </h2>
            <p className="text-lg text-center text-(--muted-foreground) mt-5">
                Ciptakan kenangan tak terlupakan dengan pengalaman ini
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                <CardType1
                    title="Camping"
                    description="Dirikan kemah di bawah bintang-bintang di perbukitan indah kami"
                />
                <CardType1
                    title="Sunrise View"
                    description="Saksikan matahari terbit yang mewarnai perbukitan"
                />
                <CardType1
                    title="Trekking"
                    description="Jelajahi jalur indah melalui Perbukitan yang rimbun"
                />
                <CardType1
                    title="Photo Spots"
                    description="Abadikan Setiap Momen - Momen Yang Indah  "
                />
            </div>
        </Section>
    );
}

export default Activity