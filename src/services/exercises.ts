import { collection, addDoc, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Exercise, ExerciseEntry } from '../types';

// For demo purposes, we'll use these dummy exercises
const dummyExercises: ExerciseEntry[] = [
  {
    id: 1,
    type: 'running',
    duration: 30,
    weight: 70,
    calories: 280,
    userId: 'user123'
  },
  {
    id: 2,
    type: 'cycling',
    duration: 45,
    weight: 70,
    calories: 315,
    userId: 'user123'
  }
];

export const getExercises = async (userId: string): Promise<ExerciseEntry[]> => {
  // In a real app, you'd use this code:
  /*
  const exercisesRef = collection(db, 'exercises');
  const q = query(exercisesRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as ExerciseEntry));
  */
  
  // For demo purposes:
  return Promise.resolve(dummyExercises);
};

export const addExercise = async (userId: string, exercise: Exercise): Promise<ExerciseEntry> => {
  // In a real app:
  /*
  const docRef = await addDoc(collection(db, 'exercises'), {
    ...exercise,
    userId,
    createdAt: new Date()
  });
  return {
    id: docRef.id,
    ...exercise,
    userId
  };
  */
  
  // For demo purposes:
  const newExercise = {
    ...exercise,
    id: Date.now(),
    calories: 0,
    userId
  };
  dummyExercises.push(newExercise);
  return Promise.resolve(newExercise);
};

export const updateExercise = async (exerciseId: string, exercise: Partial<Exercise>): Promise<void> => {
  // In a real app:
  /*
  const exerciseRef = doc(db, 'exercises', exerciseId);
  await updateDoc(exerciseRef, exercise);
  */
  
  // For demo purposes:
  const index = dummyExercises.findIndex(ex => ex.id === Number(exerciseId));
  if (index !== -1) {
    dummyExercises[index] = { ...dummyExercises[index], ...exercise };
  }
  return Promise.resolve();
};

export const deleteExercise = async (exerciseId: string): Promise<void> => {
  // In a real app:
  /*
  const exerciseRef = doc(db, 'exercises', exerciseId);
  await deleteDoc(exerciseRef);
  */
  
  // For demo purposes:
  const index = dummyExercises.findIndex(ex => ex.id === Number(exerciseId));
  if (index !== -1) {
    dummyExercises.splice(index, 1);
  }
  return Promise.resolve();
};