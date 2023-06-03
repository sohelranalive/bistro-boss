const PageCover = ({ bgImage, title, subTitle }) => {
    return (
        <div className="hero h-[500px]" style={{ backgroundImage: `url("${bgImage}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default PageCover;