'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="ABOUT BTC-FORCASTER" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">BTCFORCASTER</span> is a new
        thing., We dive into the future of trading where AI meets sentiment analysis to bring you the most accurate forecasts. 
        With our cutting-edge models, we analyze    {' '}
        <span className="font-extrabold text-white">
        real-time market trends
        </span>{' '}
        and{' '}
        <span className="font-extrabold text-white">news sentiment</span> to give you insights that feel almost magical. 
        Whether you’re an experienced trader seeking an edge or a newcomer eager to learn, our AI-driven insights are here to guide you every step of the way. 
        It’s like having a crystal ball, but powered by cutting-edge technology and real-world data.Ready to explore 
        the power of AI in crypto? {' '}
        <span className="font-extrabold text-white">explore</span> see the future of Bitcoin unfold by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
