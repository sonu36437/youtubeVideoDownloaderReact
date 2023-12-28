import React from 'react';
import { useState } from 'react';
import App from './App';
import Card from './Card'
import loding from './images/loading.gif';



function HomeComponent(){
    const [isLoading, setIsLoading] = useState(false);
    const [data,setFetchedData] = useState("");
   const [url ,setUrl]=useState("");

    async function getDetails(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log("data is being fetched");
        try {
          let response = await fetch("http://localhost:3000", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
             url:url,
            }),
          });
          let data = await response.json();
          console.log(data);
          setFetchedData(data); 
        } catch (error) {
          console.error("Error fetching data: ", error);
        } finally {
          setIsLoading(false);
        }
      }


      return(
        <>
          <App getDetails={getDetails} isLoading={isLoading} setUrl={setUrl} />
         { data!=""?<Card thumbnail={data.details.thumbnail.url} title={data.details.title}/>: isLoading &&<img src={loding}></img>}

        </>
      )


}
export default HomeComponent;