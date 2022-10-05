import './MagnificientEqualButton.css';


const MagnificientEqualButton = ({equalSign, className, onClick}) => {
    return (
            <button className={className} value={equalSign} onClick={onClick}>
                {equalSign}
            </button>
    )
}

export default MagnificientEqualButton;