// firebaseApi.ts


export const createUser = async (userData) => {
  try {
    const userRef = firestore.collection("users").doc();
    const newUser = {
      id: userRef.id,
      ...userData,
    };
    await userRef.set(newUser);
    return newUser;
  } catch (error) {
    throw new Error("Failed to create user");
  }
};

// Agrega más funciones según las operaciones que necesites realizar con la API de Firebase
