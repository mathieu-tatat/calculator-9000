import './AmazingNumberButton.css';


function Number(props) {

    const num = props.numbers;

    const digits = num.map((number) =>
        <button value={number} className="button" >{number}</button>
    );

    return (
        <div>{digits}</div>
    )
}

export default Number;