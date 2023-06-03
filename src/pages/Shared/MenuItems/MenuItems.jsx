const MenuItems = ({ item }) => {

    const { name, image, price, recipe } = item

    return (
        <div className="flex space-x-4">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[118px] h-104[104px]" src={image} alt="" />
            <div>
                <h1>{name}----------------------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItems;