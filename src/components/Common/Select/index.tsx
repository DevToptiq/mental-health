import { FC, SelectHTMLAttributes } from "react"
import "./select.css"
interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string; label: string }[]
  className?: string
}

const Select: FC<CustomSelectProps> = ({
  label,
  options,
  className,
}) => {
  return (
    <div className={`select-wrapper ${className}`}>
      <label className="label">{label}</label>
      <select className="select_input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
