import { createAlova } from 'alova';
import { getAdapter } from 'axios';
import React, { useState } from 'react'
import  adapterFetch  from 'alova/fetch';
import { useEffect } from 'react';

export const ArticulosServicio = () => {

    const [articulos,setArticulos]=useState([]);
        const alovaInstance=createAlova({   
            requestAdapter: adapterFetch()
        });

    useEffect(()=>{
        alovaInstance
     .Get('https://jsonplaceholder.typicode.com/todos')
     .then((response: any)=> response.json())
     .then((articulos:any)=>{
        setArticulos(articulos);
        console.log({articulos});

     })
     .catch((error)=>{
        console.log(error);
     });

    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                </tr>
            </thead>
            <tbody>
                {articulos.map((item:any)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>

                    </tr>
                ))}
            </tbody>

        </table>
    </div>
    
    
  )
}
