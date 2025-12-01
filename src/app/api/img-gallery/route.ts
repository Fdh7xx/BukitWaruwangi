import { NextResponse } from "next/server";

export async function GET () {
    return NextResponse.json({
        message: "img gallery",
        data: [
            {
                id: "glr-001",
                img: "https://2kwmhvwvbz3kvr4i.public.blob.vercel-storage.com/img/gallery/gallery-1.jpg",
                title: "Tempat Berkemah",
                description:
                    "Cocok untuk malam hari dengan suasana pegunungan yang tenang.",
            },
            {
                id: "glr-002",
                img: "https://2kwmhvwvbz3kvr4i.public.blob.vercel-storage.com/img/gallery/gallery-2.jpg",
                title: "Padang Rumput Luas",
                description:
                    "Area terbuka yang nyaman untuk jalan santai atau foto outdoor.",
            },
            {
                id: "glr-003",
                img: "https://2kwmhvwvbz3kvr4i.public.blob.vercel-storage.com/img/gallery/gallery-3.jpg",
                title: "Langit Mendung",
                description:
                    "Pemandangan awan tebal yang menyelimuti perbukitan.",
            },
            {
                id: "glr-004",
                img: "https://2kwmhvwvbz3kvr4i.public.blob.vercel-storage.com/img/gallery/gallery-4.jpg",
                title: "Matahari Terbit",
                description:
                    "Tempat yang pas untuk menikmati sunrise di pagi hari.",
            },
            {
                id: "glr-005",
                img: "https://2kwmhvwvbz3kvr4i.public.blob.vercel-storage.com/img/gallery/gallery-5.jpg",
                title: "Sunset Cerah",
                description:
                    "Langit penuh warna saat matahari tenggelam, cocok untuk foto.",
            },
            {
                id: "glr-006",
                img: "https://2kwmhvwvbz3kvr4i.public.blob.vercel-storage.com/img/gallery/gallery-6.jpg",
                title: "Jalur Perbukitan",
                description:
                    "Jalan kecil yang mengikuti kontur bukit, mudah dilalui untuk hiking ringan.",
            },
        ],
    });
}