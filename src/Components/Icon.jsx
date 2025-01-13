export default function Icon({icon, width = '1/5'}) {
    return (
        <div className={`w-${width} self-center border-tertiary rounded-full`}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={`./${icon}.png`} alt={`${icon} icon image`}/>
        </div>)
}