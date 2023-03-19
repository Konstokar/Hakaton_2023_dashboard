import { Outlet } from "react-router-dom";
import Menu from './Menu'
export default function Menulayout(){
    return(
        <>
        <Menu/>

        <Outlet /></>
    )
}