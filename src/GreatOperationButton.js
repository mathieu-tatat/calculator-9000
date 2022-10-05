import './GreatOperationButton.css';


const GreatOperationButton = ({signVal, className, onClick}) => {
    return (
        <button className ={className} value={signVal}
                onClick={onClick}>
            {signVal}
        </button>
    )
}



export default GreatOperationButton;