import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "./FireStore"

export const useFireBase = (teamCollection) => 
{
    const[items, setitems]=useState([])
    const updateData=async(id, newData)=>
    {
        const reference= doc(db , teamCollection, id );
        await updateDoc(reference,newData)
    }
    useEffect(()=>
    {
        const unSubcribe = onSnapshot(collection(db,teamCollection) , (querySnapshot) => 
        {
            const data =  querySnapshot.docs.map((doc)=>
            (
                {...doc.data(), id:doc.id}
            ))
            setitems(data);
        })
        return ()=>unSubcribe()
    },[]) 
    return {items , updateData}
}








