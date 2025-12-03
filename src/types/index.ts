import * as Icons from "lucide-react";

export type galleryType = {
    id: string;
    img: string;
    title: string;
    description: string;
};

export type cardType1 = {
    children?: React.ReactNode;
    title?: string;
    description?: string;
};

export type cardType2 = {
    children?: React.ReactNode;
    name?: string;
};

export type cardType3 =  {
    children?: React.ReactNode;
    from?: string;
    hours?: string;
    description?: string;   
}

type IconName = keyof typeof Icons; 
export type fasility = {
    id: string;
    name: string;
    icon: IconName;
}