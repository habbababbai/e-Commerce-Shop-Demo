import "./counter.scss";

interface Props {
    value: number;
    increment(): void;
    decrement(): void;
}

export function Counter(props: Props) {
    return (
        <div>
            <button onClick={props.increment}>+</button>
            <span>{props.value}</span>
            <button onClick={props.decrement}>-</button>
        </div>
    );
}
