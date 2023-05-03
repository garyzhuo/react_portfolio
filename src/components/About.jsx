import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    // this will provide the tilt on the cards component
    <Tilt className='xs:w-[250px] w-full'>
      {/* this is how we want the card to move 
      applying motion div to make them move the way we want them too */}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 *
          index, 0.75)}
        // this is applying the gradient colors to the card borders
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          // this is how we got the card to display the sizing
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
        items-center flex-col"
        >
          {/* pulling the icons from src / assets folder to load the cards with images */}
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
          {/* this will be how we are displaying the titles of the cards, they are listed inside services */}
          <h3 className="text-white text-[20px] font-bold text-center"> {title} </h3>
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a passionate software engineer skilled in JavaScript, Python, React,
        and other modern frameworks, I excel at creating engaging and user-friendly
        applications. With experience in diverse projects and a professional background
        in sales, marketing, and coaching, I emphasize communication, collaboration,
        and customer satisfaction, striving to create impactful and unforgettable digital
        experiences that cater to diverse user needs.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index=
            {index} {...service} />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")