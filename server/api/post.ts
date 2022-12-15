import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../utils/firebase";

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event);
  const snapshot = await getDoc(doc(firestore, `posts/${id}`));
  return snapshot.data();
});
