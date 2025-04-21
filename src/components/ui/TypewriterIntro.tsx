import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

interface TypewriterIntroProps {
  onComplete: () => void;
}

export const TypewriterIntro: React.FC<TypewriterIntroProps> = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(true);
    onComplete();
  };

  return (
    <div className="mb-4">
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 min-h-[80px] md:min-h-[100px] font-sans">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Your clinic is growing...')
              .pauseFor(700)
              .deleteAll()
              .typeString('But your schedule is a mess.')
              .pauseFor(700)
              .deleteAll()
              .typeString('Leads slip through. Bookings get lost.')
              .pauseFor(700)
              .deleteAll()
              .typeString('Trapwise brings order. Instantly.')
              .callFunction(handleComplete)
              .start();
          }}
          options={{
            delay: 50,
            deleteSpeed: 30,
            cursor: '|'
          }}
        />
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={isComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold"
      >
        Your <span className="text-[#4F6DF5]">Clinic</span>. <span className="text-[#4F6DF5]">Fully Booked</span>. <span className="text-[#4F6DF5]">Fully Automated</span>.
      </motion.h1>
    </div>
  );
};