const EditModal = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className=" inset-0 transition-opacity">
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>
            <div className="relative bg-white rounded-lg w-8/12">
                <div className="p-4">
                    <h2 className="text-lg whitespace-ellipsis overflow-hidden font-bold mb-2">Item name</h2>
                    <h1 className="text-2xl italic font-bold">Information Update</h1>
                    <hr />
                    <br />
                    <div className="text-gray-700">

                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' className="input input-bordered" required min="1" step="0.01" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input type="number" required name='quantity' className="input input-bordered" />
                            </div>
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea name='description' required className="textarea textarea-bordered" ></textarea>
                            </div>
                            <div className="mb-5 space-x-2">
                                <input className="btn btn-primary" type="submit" value="Update" />
                                <button className="btn btn-warning">
                                    Close
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;