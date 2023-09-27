import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCart from "./PhoneCart";


const PhoneDetails = () => {
    const [phone, setPhone] = useState({});

    const {id} = useParams();
    const phones = useLoaderData();

    

    useEffect(()=>{

        const selectPhone = phones.find(phn => phn.id ===id);
        setPhone(selectPhone);

    }, [id, phones]);

    return (
        <div>
           <PhoneCart phone={phone}></PhoneCart>
        </div>
    );
};

export default PhoneDetails;