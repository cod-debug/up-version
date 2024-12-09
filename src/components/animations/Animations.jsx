import { motion } from "framer-motion";
import { useState } from "react";

export function FadeInUp({children, ...props}){
    const [animationKey, setAnimationKey] = useState(0);
    return (<motion.div
    key={animationKey}
    initial={{ y: 30, opacity: 0, }}
    whileInView={{ y: 0, opacity: 1, }}
    viewport={{ margin: "-1%" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    onViewportLeave={() => setAnimationKey(prev => prev + 1)}
    {...props}
    >
        {children}
    </motion.div>)
}

export function FadeInRight({children, ...props}){
    const [animationKey, setAnimationKey] = useState(0);
    return (<motion.div
    key={animationKey}
    {...props}
    initial={{ x: 100, opacity: 0, }}
    whileInView={{ x: 0, opacity: 1, }}
    viewport={{ margin: "-1%" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    onViewportLeave={() => setAnimationKey(prev => prev + 1)}
    >
        {children}
    </motion.div>)
}

export function FadeInLeft({children, ...props}){
    const [animationKey, setAnimationKey] = useState(0);
    return (<motion.div
    key={animationKey}
    {...props}
    initial={{ x: -100, opacity: 0, }}
    whileInView={{ x: 0, opacity: 1, }}
    viewport={{ margin: "-1%" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    onViewportLeave={() => setAnimationKey(prev => prev + 1)}
    >
        {children}
    </motion.div>)
}

export function FadeIn({children, ...props}){
    const [animationKey, setAnimationKey] = useState(0);
    return (<motion.div
    key={animationKey}
    {...props}
    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1, }}
    viewport={{ margin: "-1%" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    onViewportLeave={() => setAnimationKey(prev => prev + 1)}
    >
        {children}
    </motion.div>)
}