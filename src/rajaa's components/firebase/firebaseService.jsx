import firestore from './firebase.jsx';

export const fetchGroups = async () => {
  const snapshot = await firestore.collection('group').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};