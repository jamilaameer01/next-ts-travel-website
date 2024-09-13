import Image from "next/image";

type ButtonProps = {
    type: 'button' | 'submit' ;
    title: string ;
    icon?: string ;
    // variant prop to determine which style or theme should be applied to that button.
    variant:string;
    full?:boolean
}

const Button = ({ type,  title, icon, variant,full} : ButtonProps) => {
  return (
    <button 
    className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    type={type}
    >
        {/* conditionally render an image based on the presence of a variable(icon). */}
     {icon && <Image src={icon} alt={title} width={24} height={24} />}
     <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
