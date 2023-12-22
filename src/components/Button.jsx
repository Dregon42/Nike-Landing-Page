

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
  return (
    <section>
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none 
          ${backgroundColor} ? '${backgroundColor} ${textColor} ${borderColor}' : 'text-white bg-coral-red rounded-full border-coral-red'
          ${fullWidth && 'w-full'} `}>
            {label}
            {iconURL && <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full w-5 h-5"/>}
        </button>
    </section>
  )
}

export default Button
