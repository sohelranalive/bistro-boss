import aboutImage from '../../../assets/home/chef-service.jpg'

const About = () => {
    return (
        <div className='my-20 relative flex justify-center items-center'>
            <img src={aboutImage} alt="" />
            <div className='absolute w-10/12 bg-white p-16'>
                <h1 className='text-center text-4xl my-4'>Bistro Boss</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatum minima voluptatem dolor distinctio tenetur dolorem voluptates accusamus perspiciatis hic quas adipisci fuga cupiditate saepe recusandae totam quaerat temporibus nemo aperiam amet quisquam, nam quidem maiores! Vitae reprehenderit minima consectetur?</p>
            </div>
        </div>
    );
};

export default About;