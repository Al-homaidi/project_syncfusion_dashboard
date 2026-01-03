import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { motion } from 'framer-motion';

import { Stacked, Pie, Button, LineChart, SparkLine, GlassCard } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <motion.div
      className="mt-24 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
        <GlassCard className="h-64 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl text-white font-bold">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4 shadow-lg shadow-neon-purple/50"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </GlassCard>

        <div className="flex m-3 flex-wrap justify-center gap-6 items-center">
          {earningData.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <GlassCard className="h-44 md:w-56 p-4 pt-9">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.title}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={itemVariants} className="flex gap-10 flex-wrap justify-center mt-6">
        <GlassCard className="m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl text-slate-900 dark:text-white">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-neon-blue hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-gray-200 dark:border-white/10 m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold text-slate-900 dark:text-white">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">$48,487</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <GlassCard className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </GlassCard>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 glass-effect">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Yearly Sales</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <span><GoPrimitiveDot /></span>
                <span>2021</span>
              </p>
            </div>
          </div>
          <div className="mt-10 w-72 md:w-full">
            <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="360px" />
          </div>
        </div>

        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 glass-effect">
          <div className="flex justify-between mb-10">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Weekly Stats</p>
            <IoIosMore />
          </div>
          <SparkLine currentColor={currentColor} id="area-sparkLine" type="Area" height="160px" width="320px" data={SparklineAreaData} color="rgb(242, 252, 253)" />
        </div>
      </div>
    </motion.div>
  );
};

export default Ecommerce;
