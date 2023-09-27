import PropTypes from 'prop-types';

const FvPhone = ({phone}) => {

    const { image, phone_name,brand_name, price,} = phone ;

    return (
        <div className='m-4'>
        <div className="relative border flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {phone_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {brand_name}
          </h4>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Price:  ${price}
          </h4>
         <div>
            <button className='btn btn-secondary'>Add Favorite</button>
         </div>
        </div>
      </div>  
        </div>
    );
};

FvPhone.propTypes = {
    phone: PropTypes.object,
    
}

export default FvPhone;