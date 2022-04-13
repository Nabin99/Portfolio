import Loading from "../loading/loading";
import NavBar from "../navbar/navbar";

interface layoutTypes {
    children: JSX.Element;
}

const Layout= ({ children }:layoutTypes) =>{
    return(
        <>
        <NavBar />
        {children}
        <Loading/>
        </>
    );
}
export default Layout;