const Person = (props) => {
    // if (props.age > 18) {
    //     message = 'please go vote!';
    // } else {
    //     message = 'you must be 18 or older to vote.';
    // }

    // if (props.name.length > 8) {
    //     nameLength = props.name.substr(0,6);
    // } else {
    //     nameLength = props.name;
    // }

    const message = props.age >= 18 ? "please go vote!" : "you must be 18 or older to vote.";
    const name = props.name.length > 8 ? props.name.substr(0,6) : props.name;
    const hobbies = props.hobbies.map(h => <li>{h}</li>)
    console.log(props);
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {props.age}</li>
                <li>Hobbies: <ul>{hobbies}</ul></li>
            </ul>
            <h3>{message}</h3>

        </div>
    )
}