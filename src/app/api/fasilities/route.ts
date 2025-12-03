import { NextResponse } from "next/server";


export async function GET() {
    return NextResponse.json({
        message: "fasilities",
        data: [
            {
                id: "fas-001",
                name: "Area Parkir",
                icon: "CircleParking",
            },
            {
                id: "fas-002",
                name: "Tempat Foto",
                icon: "Camera",
            },
            {
                id: "fas-003",
                name: "Resto",
                icon: "UtensilsCrossed",
            },
            {
                id: "fas-004",
                name: "Tempat Beribadah",
                icon: "Moon",
            },
            {
                id: "fas-005",
                name: "Tempat Berkemah",
                icon: "Tent",
            },
            {
                id: "fas-006",
                name: "Titik Kumpul",
                icon: "MapPin",
            },
        ],
    });
}