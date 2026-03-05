import Image from 'next/image';

interface IconProps {
    icon: string
    iconH: string
    iconW: string
}

function Icon({icon, iconH: IconHeight, iconW: IconWidth }: IconProps) {
    return (
        <div > 
            <h2>Hi world! </h2>
             {
                <Image src={icon} className={`h-[${IconHeight? IconHeight : "48px"}] w-[${IconWidth? IconWidth : "48px"}]`}/>
             }
        </div>
    )
}

export default Icon;