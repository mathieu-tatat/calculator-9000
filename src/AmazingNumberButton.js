import './AmazingNumberButton.css';


const AmazingNumberButton = ({ btn, num, className, onClick}) => {
    return (
                <button className={className} value={btn} onClick={onClick}>
                   {num}
                </button>
    )
}

export default AmazingNumberButton;