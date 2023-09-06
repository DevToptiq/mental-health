import { FC, InputHTMLAttributes } from "react"
import "./input.css"
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  placeholder: string
  className?: string
}

const Input: FC<CustomInputProps> = ({ label,  className, placeholder }) => {
  return (
    <div className={`input-wrapper`}>
      <label className="label">{label}</label>
      <input className={`text_input ${className}`} type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input
