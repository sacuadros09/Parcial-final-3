import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebaseConfig";
import { Comida } from "../types/comida";


import { getFirestore,collection, addDoc, getDocs } from "firebase/firestore";




const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const saveComidaInDB =async (comida: Comida) => {;




try {
  await addDoc(collection(db, "comidas"), comida);
} catch (e) {
  console.error("Error adding document: ", e);
}
};


const getComidaFromDB = async (): Promise<Comida[]> => {
    const resp: Comida[] = [];
    const querySnapshot = await getDocs(collection(db, "comidas"));
    querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),
  } as Comida);
  })
  return resp;
};




export default {saveComidaInDB,getComidaFromDB };
