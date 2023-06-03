const SectionTittle = ({ heading, subHeading }) => {
    return (
        <div className="w-2/6 mx-auto text-center my-8">
            <p className="mb-2 text-[#D99904] italic">---{subHeading}---</p>
            <h1 className="border-y-4 py-4 uppercase text-4xl">{heading}</h1>
        </div>
    );
};

export default SectionTittle;