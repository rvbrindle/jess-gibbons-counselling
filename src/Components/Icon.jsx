export default function Icon({icon, width = '1/5'}) {
    return (
        <div className={`w-${width} self-center border-tertiary rounded-full`}>
            <img src={`/src/assets/${icon}.png`} alt={`${icon} icon`}/>
        </div>)
}