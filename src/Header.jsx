function Header({headerInfo,cname, children}){
    // let {headerInfo,cname} = props;
    // console.log(headerInfo,cname)

    // console.log(props.headerInfo.email)
    // console.log(props.headerInfo.phone)

    return(
        <div>
            {children}
            <h1> {headerInfo.email} {cname}</h1>
        </div>
    )
}

export default Header;