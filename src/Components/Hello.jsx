function Hello(props){
    let name = props.user.username;
    let age = props.user.age;
    let email = props.user.email;
    return(
        <div>
            <h1>name:  {name} </h1>
            <h1>Age:  {age} </h1>
            <h1>Email : {email}</h1>
        </div>

    )
}
export default Hello;