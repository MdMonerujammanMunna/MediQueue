import Footersection from "./components/Footer/Footer";
import Navbar from "./components/NavigationBar/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <main> {children} </main>
            <Footersection />
        </>
    );
};

export default MainLayout;