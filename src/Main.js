import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MenuPrincipal } from "./components/MenuPrincipal"
import injectContext from "./store/AppContext"
import ContextWrapper from "./store/ContextWrapper"
import { Contact } from "./views/Contact"
import { Home } from "./views/Home"
import { NotFound } from "./views/NotFound"
import { Services } from "./views/Services"

const Main = () => {
    return (
        <>
            {/* <ContextWrapper> */}
            <BrowserRouter>
                <MenuPrincipal />
                <Routes>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            {/* </ContextWrapper> */}
        </>
    )
}

export default injectContext(Main);
