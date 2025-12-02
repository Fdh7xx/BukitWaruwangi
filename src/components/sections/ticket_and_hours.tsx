import Section from "../layouts/section"

// icons
import {Ticket, Clock} from "lucide-react";
import ListTiket from "../ui/list_tiket";
import ListHour from "../ui/list_hour";

const TiketAndHours = () =>{
    return (
        <Section>
            <h2 className="max-w-70 md:max-w-3xl mx-auto text-4xl md:text-5xl text-center font-bold text-(--foreground) ">
                Harga Tiket & Jam Buka
            </h2>
            <p className="text-lg text-center text-(--muted-foreground) mt-5">
                Rencanakan kunjungan Anda dengan tarif terjangkau dan jam kerja
                fleksibel kami
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
                <div className="border-2 border-(--accent)/50 rounded-lg p-5">
                    <div className="flex items-center gap-5">
                        <div className="w-13 h-13 rounded-full bg-(--accent)/15 flex items-center justify-center">
                            <Ticket className="size-6.5 text-(--primary)" />
                        </div>
                        <p className="text-2xl font-bold text-(--foreground)">
                            Harga Tiket
                        </p>
                    </div>
                    <div className="mt-3">
                        <ListTiket
                            className="border-b"
                            name="Tiket Masuk"
                            price="19.000"
                        />
                        <ListTiket
                            className="border-b"
                            name="Parkir Motor"
                            price="3.000"
                        />
                        <ListTiket
                            className="border-b"
                            name="Parkir Mobil"
                            price="10.000"
                        />
                        <ListTiket
                            className="border-b"
                            name="Kolam Berenang"
                            price="30.000"
                        />
                        <ListTiket name="Peralatan Camping" price="250.000" />
                    </div>
                </div>
                <div className="border-2 border-(--accent)/50 rounded-lg p-5">
                    <div className="flex items-center gap-5">
                        <div className="w-13 h-13 rounded-full bg-(--accent)/15 flex items-center justify-center">
                            <Clock className="size-6.5 text-(--primary)" />
                        </div>
                        <p className="text-2xl font-bold text-(--foreground)">
                            Jam Oprasional
                        </p>
                    </div>
                    <div className="mt-3">
                        <ListHour
                            className="border-b"
                            category="Weekdays"
                            day="Senin - Kamis"
                            hours="07:00 - 17:00"
                        />
                        <ListHour
                            className="border-b"
                            category="Weekends & Holidays"
                            day="Jumat - Minggu"
                            hours="06:00 - 17:00"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
    }

export default TiketAndHours