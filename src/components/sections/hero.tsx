"use client"

const Hero = () =>{
    return (
        <section
            className={` relative bg-[url("/img/hero-bukit-waruwangi.jpg")] h-dvh bg-cover bg-center flex items-center justify-center px-5 md:px-10`}>
            <div className="text-center space-y-5 z-10">
                <h1 className=" font-bold text-white text-5xl md:text-7xl max-w-3xl mx-auto">
                    Jelajahi Keindahan Bukit Waruwangi
                </h1>
                <h2 className="text-lg md:text-xl text-white max-w-3xl  mx-auto">
                    Jelajahi Perbukitan Tenang di Banten, Rasakan kesejukan
                    alam, sambut matahari terbit yang memukau, dan temukan
                    petualangan luar ruang yang tak terlupakan.
                </h2>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 justify-center">
                    <button className="px-5 py-3 text-lg bg-(--primary) hover:bg-[#3b8b3e] duration-300 rounded-full text-white font-semibold cursor-pointer">
                        Jelajahi Sekarang
                    </button>
                    <button className="px-5 py-3 text-lg bg-white rounded-full text-(--primary) font-semibold cursor-pointer">
                        Lihat Fasilitas
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;