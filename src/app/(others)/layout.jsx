import Navbar from "../(main)/components/NavigationBar/Navbar";

const layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main> {children} </main>
        </div>
    );
};

export default layout;