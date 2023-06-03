import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import './Featured.css'
import featuredImage from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <section className="featured pb-24 pt-10 mb-20 mt-20 bg-fixed">
            <SectionTittle
                heading='Our featured items'
                subHeading='Pick best from menu'>
            </SectionTittle>
            <div className="flex justify-center items-center w-10/12 mx-auto space-x-8 text-white bg-slate-300">
                <div className="p-8">
                    <img src={featuredImage} alt="" />
                </div>
                <div className="space-y-4">
                    <h1>March 20, 2023</h1>
                    <h1 className="uppercase">WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white">Button</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;