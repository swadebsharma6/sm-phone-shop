import PropTypes from 'prop-types';
import Phone from '../Phone/Phone';

const Phones = ({phones}) => {
    console.log(phones)
    return (
        <section>
         
           <h1 className="text-2xl font-bold text-center my-8">--Our Phones Collections-- </h1>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
            phones.map(phone => <Phone
                key={phone.id}
                phone={phone}
                ></Phone>)
            }
           </div>
           
        </section>
    );
};

Phones.propTypes = {
    
    phones: PropTypes.array,
}
export default Phones;