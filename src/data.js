import React, {useEffect, useState} from 'react'
import Table2 from './Table';

var axios = require("axios").default;
const xml2js = require('xml2js');


var options = {
  method: 'GET',
  url: 'https://fidelity-investments.p.rapidapi.com/market/get-sectors',
  headers: {
    "Content-Type": "application/xml; charset=utf-8",
    'x-rapidapi-host': 'fidelity-investments.p.rapidapi.com',
    'x-rapidapi-key': 'd5f467ae0fmsh493e1d6f4f00526p18ad55jsndba95a02c1a5'
  }
};

function MyComponent(props) {
    
    const [sector, setSector] = useState("");
    const [updated, setUpdated] = useState(false);
    const [compiled, setCompiled] = useState(false);
    const [values, setValues] = useState({});
    const valueArray = [0,1,2,3,4,5,6,7,8,9,10,11];

    useEffect(() => {
        
        axios.request(options).then(function (response) {

            (async () => {
                

                setSector(response.data); 
                setUpdated(true); 

            })();
            
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    if(updated  && !compiled){
        xml2js.parseString(sector, (err, result) => {
            if(err) {
                throw err;
            }

        
        const json = JSON.stringify(result, null, 4);
        
        let value = JSON.parse(json);
        setValues(value);
        setCompiled(true);
        
    
        });
    }
    


    if(Object.keys(values).length > 0){
        return (
            <div>
                    {valueArray.map(number123 => 
                        <Table2
                        description = {values["Chart"]["Symbol"][number123]["DESCRIPTION"]}
                        identifier = {values["Chart"]["Symbol"][number123]["IDENTIFIER"]}
                        lastdate = {values["Chart"]["Symbol"][number123]["LAST_DATE"]}
                        interval = {values["Chart"]["Symbol"][number123][props.indexValue]}
                        />
                        
                        )}
                    
                    
                </div>
            )
        
    } 
        return <p>Loading...</p>

} 


export default MyComponent;

