import React, { ReactNode } from 'react'

interface TitlePropes {
    children : ReactNode  ,
    size?: 'small'|'medium' | 'large' ,
    className? : string,
}
const Title = ({children,size,className}:TitlePropes) => {

    const getSizeStyles = () => {
        switch (size) {
          case 'small':
            return 'text-sm font-medium'; 
          case 'medium':
            return 'text-xl font-semibold';
          case 'large':
            return 'text-3xl font-bold'; 
          default:
            return '';
        }
      };
  return (
    <h1 className={`${getSizeStyles()} ${className}`}>
    {children}
  </h1>
  )
}

export default Title
