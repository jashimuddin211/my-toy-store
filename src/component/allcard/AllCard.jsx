import { useEffect, useState } from "react";
import { Link } from "react-router";




const AllCard = () => {
      const [data, setData] = useState([]);

  useEffect(() => {
    fetch("index.json")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  console.log(data);

    return (
        <div className="bg-orange-50">
            <div className="max-w-[1280px] mx-auto">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 gp-4 lg:grid-cols-3  py-5">
                {
                    data.map(e => <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="">
    <img className="p-4 w-70 h-60 "
      src={e.pictureURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-blue-800">{e.toyName}</h2>
    <div className="flex justify-between font-bold">
        <h1 className="">Rating: {e.rating}</h1>
        <h1>Quantity: {e.availableQuantity
}</h1>
    </div>
    <h1 className="font-bold text-xl">Price: {e.price}$</h1>
    <div className="card-actions justify-end">
      <Link to={`/cardDetails/${e.toyId}`}>
      <button className="btn btn-primary w-full">View More</button>
      </Link>
    </div>
  </div>
</div>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllCard;