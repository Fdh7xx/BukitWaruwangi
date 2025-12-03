import FadeUp from "../animations/fadeup"
import { cardType1 } from "@/types"

const CardType1 = (props : cardType1) =>{
    return (
        <FadeUp>
            <div className="flex flex-col items-center justify-center gap-2 p-5 bg-white border-2 border-(--border) hover:border-(--secondary) rounded-lg shadow-sm hover:shadow-xl duration-300">
                <div className="p-4 rounded-full bg-(--accent)/20 text-(--primary)">
                    {props.children}
                </div>
                <p className="text-(--foreground) font-semibold text-xl text-center">{props.title}</p>
                <p className="text-(--muted-foreground) text-center">{props.description}</p>
            </div>  
        </FadeUp>
    )
}

export default CardType1