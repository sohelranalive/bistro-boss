import { Parallax } from 'react-parallax';

const SectionCover = ({ bgImage, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgImage}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[400px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
            {/* <div style={{ height: '200px' }} /> */}
        </Parallax>


    );
};

export default SectionCover;