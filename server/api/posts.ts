import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
  const snapshot = await getDocs(collection(firestore, "posts"));
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
});
