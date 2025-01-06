/* eslint-disable react/prop-types */
 

export default function Wheather({temprature}) {

   if(temprature < 15){
       return <h1>It&apos;s cold Outside. </h1>
    }
    else if(temprature >= 15 && temprature <=25){
        return <h1>Its Nice Outside</h1>
    }
    else{
        return <h1>Its Hot Outside</h1>
    }
    
}
