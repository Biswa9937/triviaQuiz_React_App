import axios from "axios";
import {quizUrl} from "../config";

export default async function apiService() {
  try{
    const response = await axios.get(quizUrl);
    return response && response.data;
  }catch(err){
    console.error(err);
  }
}