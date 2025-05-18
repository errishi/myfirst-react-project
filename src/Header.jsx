function Header({headerInfo,cname}){
    // let {headerInfo,cname} = props;
    // console.log(headerInfo,cname)

    // console.log(props.headerInfo.email)
    // console.log(props.headerInfo.phone)

    return(
        <div>
            <h1>Welcome Header section {headerInfo.email} {cname}</h1>
            <div>Hello world</div>
            <div>React project</div>
        </div>
    )
}

export default Header;