import { cardType3 } from "@/types"
import FadeUp from "../animations/fadeup"

const CardType3 = (props : cardType3) =>{
    return (
        <FadeUp>
            <div className="flex flex-col items-center justify-center gap-2 p-5 bg-white border-2 border-(--border) hover:border-(--secondary) rounded-lg shadow-sm hover:shadow-xl duration-300">
                <div className="p-4 rounded-full bg-(--accent)/20 text-(--primary)">
                    {props.children}
                </div>
                <p className="text-(--foreground) font-semibold text-xl text-center">
                    {props.from}
                </p>
                <p>{props.hours}</p>
                <p className="text-(--muted-foreground) text-center">
                    {props.description}
                </p>
            </div>
        </FadeUp>
    );
}

export default CardType3