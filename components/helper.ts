import { db } from '../config/config';

import {collection,getDoc,getDocs,addDoc,updateDoc,deleteDoc,doc,} from "firebase/firestore";

export interface Ihelper{Name: string;}

export interface IDataDoc extends Ihelper {
  id : string;
}

const datastr = "Test";
const datacollection = collection (db,datastr);

class helper{

  getdata = async () => {
    const {docs} = await getDocs(datacollection);
    return docs.map((doc) => {
    return {...doc.data(), id : doc.id};
  });
  };
}

export default new helper();