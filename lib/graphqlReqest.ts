import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

interface graphqlType {
    query:string
  }
  

export default async function graphqlRequest(query:graphqlType) {
    
    const url="http://test.local/graphql"
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