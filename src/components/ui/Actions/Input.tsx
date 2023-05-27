import React from "react"

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    React.AriaAttributes {}

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return <input className={`px-4 py-2 mx-1 border focus:border-violet-600 focus:outline-none ${className}`} {...rest} />
}

Input.displayName = "Input"
