import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Phone = ({phone}) => {
    console.log(phone);
    const {id, brand_name, image, phone_name, price,} = phone;
    return (
        <div className='m-3'>
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border">
        <div className="relative mx-4 mt-4 h-72 border overflow-hidden rounded-xl bg-gray-100 bg-clip-border text-gray-700">
          <img
            src={image}
            className=" w-full h-full "
          />
        </div>
        <div className="p-6">
        <p className="block my-4 font-sans text-xl font-bold leading-relaxed text-blue-600 antialiased">
              {brand_name}
            </p>
          <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-sm font-bold leading-normal text-gray-700 antialiased opacity-75">
          {phone_name}
         </p>
         <p className="block font-sans text-sm font-bold leading-normal text-gray-700 antialiased opacity-75">
          Price:  ${price}
          </p>
          </div>
          
        </div>
        <div className="p-6 pt-0">
        <Link to={`/phones/${id}`}>
        <button
        className="block bg-slate-300 w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
      </button>
        </Link>
        </div>
      </div>
        </div>
    );
};




Phone.propTypes = {
    
    phone: PropTypes.object,
}
export default Phone;