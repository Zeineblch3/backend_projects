import {
    hashPassword,
    verifyPassword
} from "./src/utils/password.js";

const hash = await hashPassword("MotDePasse123");

const correct = await verifyPassword(hash, "MotDePasse123");

const incorrect = await verifyPassword(hash, "AutreMotDePasse");

console.log(correct);
console.log(incorrect);