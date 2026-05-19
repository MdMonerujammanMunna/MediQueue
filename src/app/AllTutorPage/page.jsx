import CardPage from "../components/Card/Card";

const AllTutorPage = async () => {
    const data = await fetch("http://localhost:5000/Tutors")
    const results = await data.json()
    return (
        <>
            <div className="py-10">
                <div className="mb-5">
                    <h1 className="text-3xl font-bold text-[var(--primary-color)] text-center">All Tutor Section</h1>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 px-10">
                    {results.map((item, index) => <CardPage key={index} item={item}></CardPage>)}
                </div>
            </div>
        </>
    );
};

export default AllTutorPage;