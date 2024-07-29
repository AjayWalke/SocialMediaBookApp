import "./input.css"

export default function Input({ name, placeholder, type, setValue}) {
  return (
    <div className="input_container">
      <span className="name_container">{name}</span>
      <input
        className="input_box_container"
        placeholder={placeholder}
        type={type}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}