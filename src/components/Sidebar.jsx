import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { motion, AnimatePresence } from 'framer-motion';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';



const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-gradient-to-r from-neon-purple to-neon-blue shadow-lg nav-item';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-white hover:bg-light-gray dark:hover:bg-white/10 m-2 transition-all duration-300';

  return (
    <AnimatePresence>
      {activeMenu && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 glass-effect border-r-0 rounded-r-2xl mt-2"
          style={{ zIndex: 1000 }}
        >
          {activeMenu && (
            <>
              <div className="flex justify-between items-center">
                <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  <SiShopware className="text-neon-blue" /> <span className="text-glow">Shoppy</span>
                </Link>
                <TooltipComponent content="Menu" position="BottomCenter">
                  <button
                    type="button"
                    onClick={() => setActiveMenu(!activeMenu)}
                    style={{ color: currentColor }}
                    className="text-xl rounded-full p-3 hover:bg-white/10 mt-4 block md:hidden transition-colors"
                  >
                    <MdOutlineCancel />
                  </button>
                </TooltipComponent>
              </div>
              <div className="mt-10">
                {links.map((item) => (
                  <div key={item.title}>
                    <p className="text-gray-500 m-3 mt-4 uppercase font-semibold text-sm tracking-wider">
                      {item.title}
                    </p>
                    {item.links.map((link) => (
                      <NavLink
                        to={`/${link.name}`}
                        key={link.name}
                        onClick={handleCloseSideBar}
                        style={({ isActive }) => ({
                          // Overriding default style to use tailwind classes for active state mainly
                          backgroundColor: isActive ? '' : '',
                        })}
                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                      >
                        <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4">
                          {link.icon}
                          <span className="capitalize">{link.name}</span>
                        </motion.div>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
