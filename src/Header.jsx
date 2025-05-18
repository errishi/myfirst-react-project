function Header(props){
    console.log(props.email)

    return(
        <div>
            <h1>Welcome Header section {props.email} | {props.phone} </h1>
            <div>Hello world</div>
            <div>React project</div>
        </div>
    )
}

export default Header;