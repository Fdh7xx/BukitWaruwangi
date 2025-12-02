"use client"
import { motion } from "framer-motion";

type  Props = {
    children : React.ReactNode
}

const FadeUp = (props : Props) =>{
    return(
        <motion.div 
        initial={{y:30, opacity:0}} 
        whileInView={{y:0, opacity:1}} 
        transition={{duration:0.6,}}
        viewport={{once:true, amount:0.8,}}
        >
            {props.children}
        </motion.div>
    )
}

export default FadeUp