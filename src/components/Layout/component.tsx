import { ReactNode } from "react";
import Footer from "../footer/component";
import Header from "../header/component";

type Props = {
    children: ReactNode;
}

const Layout = ({children }: Props) => {
    return (
        <div>
            <Header key="header" />
            {children}
            <Footer key="footer" />
        </div>
    );
}
 
export default Layout;