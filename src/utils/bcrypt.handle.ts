import { hash, compare } from "bcryptjs"; 
//HASH es para enccriptar y compare para comparar la contraseña plana con la encriptada.

const encrypt = async (pass: string) => {
  if (!pass) {
    throw new Error("Password is required.");
  }
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (pass: string, passHash: string) => {
  if (!pass || !passHash) {
    throw new Error("Password and password hash are required.");
  }
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verified };