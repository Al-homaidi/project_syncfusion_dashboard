import React from 'react';
import { motion } from 'framer-motion';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${bgColor}` }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor} transition-all`}
    >
      {icon} {text}
    </motion.button>
  );
};

export default Button;
