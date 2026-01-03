import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" } : {}}
            className={`glass-effect rounded-2xl p-6 text-slate-900 dark:text-white ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
