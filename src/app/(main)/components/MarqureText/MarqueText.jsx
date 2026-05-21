
import Marquee from 'react-fast-marquee';
import MarqureIcon from '../Icons & Text/MarqureIcon';

const MarqueText = () => {
    return (
        <div className='px-5 dark:bg-zinc-950'>
            <Marquee pauseOnHover  >
                <MarqureIcon ></MarqureIcon>
            </Marquee>

        </div>
    );
};

export default MarqueText;