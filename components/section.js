import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const MotionDiv = chakra(motion.div, {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) ||
    ['animate', 'initial', 'exit', 'whileHover', 'whileTap', 'transition'].includes(prop),
});

const Section = ({ children, delay = 0 }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: 'tween', duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    mb={8}
  >
    {children}
  </MotionDiv>
);

export default Section;
