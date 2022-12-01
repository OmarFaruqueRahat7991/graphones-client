import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Phone from '../Phone/Phone';

const AllPhones = () => {
    const params = useParams();
    const { data: phone = [] } = useQuery({
        queryKey: ['allPhones'],
        queryFn: async () => {
            const res = await fetch(`https://my-twelfth-assignment-server.vercel.app/allPhones/${params.id}`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    });
    return (
        <section className='my-6'>
            <div className=''>
                {
                    phone.map(phones =>
                        <Phone
                            key={phones.unid}
                            phones={phones}
                        ></Phone>
                    )
                }
            </div>
        </section>
    );
};

export default AllPhones;