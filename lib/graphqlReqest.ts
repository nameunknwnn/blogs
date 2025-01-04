import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default async function graphqlRequest(query:any) {
    
    const url="https://7f8e-2405-201-6828-f082-c929-dbda-dda8-b24c.ngrok-free.app/graphql"
    const headers={'Content-Type':'application/json'}

    // const res =await fetch (url,{
    //     headers,
    //     method:'POST',
    //     body:JSON.stringify(query)
    // })  
    const res = await axios.post(url, query, {
        headers: headers,
    });

    // const resJson=await res.json();   
    // console.log(res.data) ;  
    return res.data ;
}