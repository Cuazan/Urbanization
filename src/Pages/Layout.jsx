import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Footer-Header";

export function Layout(){

    return(
        <>
        <Outlet/>
        <Footer/>
        </>
    )
}