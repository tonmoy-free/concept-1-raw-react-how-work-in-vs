// React+ReactDOM ai duti dia e sob kaj hoi..react a..
console.log(React);
console.log(ReactDOM);


const myReactElement = React.createElement(
    "div",
    { name: "Shamim" },
    "Hello World"
);
//("typeof",props,"children") 3 ta paramiter nai. "hello world" ar jaigai chile ar akta react.creteElement nai a jai jeta 3 ta value nai.


// jsx element
// const myJsxElement = (
//     <div>
//         <p>Hello World</p>
//     </div>
// );


// ata akti function .react a function ar first word boro hater dite hoi.
const MyJsxFn = (props) => {
    return (
        <div>
            <p>Hello World {props.name} </p>
            {props.children}
        </div>
    );
};

const Age = (props) => {
    return (
        <p>I am {props.age} yers old.</p>
    )
}

// console.log(MyJsxElement());

console.log(myReactElement);
console.log(myReactElement.props.name);


// ReactDOM.createRoot(document.getElementById
//     ('myDivRoot')).render(myReactElement);


// ReactDOM.createRoot(document.getElementById
//     ("myDivRoot")).render(MyJsxElement()); 

// ReactDOM.createRoot(document.getElementById
//      ("myDivRoot")).render(<MyJsxFn name={"Fihan Khan"}/>);



// useState
const Counter = () => {

    const [count, setCount] = React.useState(0);
    
    function handleCount() {
        const increase = count + 1;
        setCount(increase);
    }

    function reset(){
        const reset = 0;
        setCount(reset);
    }

    return (
        <div>
            <button onClick={handleCount}>Counter clicked</button>
            <button onClick={reset}>Reset</button>
            <p>Count : {count} </p>
        </div>
    )
};

// ReactDOM.createRoot(document.getElementById
//     ("myDivRoot")).render(
//     <Counter></Counter>);

ReactDOM.createRoot(document.getElementById
    ("myDivRoot")).render(
        <>
            <MyJsxFn name={"Fihan Khan"}>
                <Age age={26}></Age>
                <Age age={27}></Age>
                <Age age={28}></Age>
                <Age age={29}></Age>
            </MyJsxFn>
            <Counter></Counter>
        </>);
