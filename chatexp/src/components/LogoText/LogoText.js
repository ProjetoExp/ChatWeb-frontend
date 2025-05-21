import React from 'react';
import GradientText from '../GradientText/GradientText.js';

const LogoText = ({ className = '', style = {} }) => (
  <GradientText
    className={className}
    style={{
      fontSize: 36,
      fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      letterSpacing: 1,
      ...style
    }}
  >
    ChatExp
  </GradientText>
);

export default LogoText;