import book from "../../../../../public/Icons/book.png"
import brain from "../../../../../public/Icons/brain.png"
import resourse from "../../../../../public/Icons/resourse.png"
import target from "../../../../../public/Icons/target.png"
import write from "../../../../../public/Icons/write.png"
import teacher from "../../../../../public/Icons/teacher.png"
import Image from "next/image"
const MarqureIcon = () => {
    const AllData = [
        {
            Icons: teacher,
            Text: "Expert Tutors"

        },
        {
            Icons: brain,
            Text: "Smart Learning"

        },
        {
            Icons: write,
            Text: "Premium Notes"

        },
        {
            Icons: book,
            Text: "Education Materials"

        },
        {
            Icons: resourse,
            Text: "PDF Resources"

        },
        {
            Icons: target,
            Text: "Exam Preparation"

        },
    ]
    return (
        <>
            {
                AllData.map((Data, index) => (
                    <div key={index} className="flex items-center gap-5 py-5">
                        {Data.Icons && (
                            <Image
                                src={Data.Icons}
                                alt="icon"
                                width={30}
                                height={30}
                            />
                        )}
                        <span className="mr-20 text-xl font-bold text-[var(--primary-color)]">{Data.Text}</span>
                    </div>
                ))
            }
        </>
    );
};

export default MarqureIcon;