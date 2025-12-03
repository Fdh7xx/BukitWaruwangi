import { cardType2 } from "@/types"
import FadeUp from "../animations/fadeup";

const CardType2 = (props : cardType2) =>{
    return (
        <FadeUp>
            <div className="border-2 border-(--border) hover:border-(--secondary) rounded-lg shadow-sm hover:shadow-xl duration-300 p-5 flex flex-col items-center justify-center gap-3">
                <div className="bg-(--accent)/20 text-(--primary) p-4 rounded-full">
                    {props.children}
                </div>
                <p className="text-(--foreground) font-semibold">{props.name}</p>
            </div>
        </FadeUp>
    );
}

export default CardType2