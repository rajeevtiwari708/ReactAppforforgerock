import { FRAuth  } from '@forgerock/javascript-sdk';
import {config} from "../config/config";
// Initialize your SDK here with the necessary configurations.
const  AuthenticateUser = async (username, password) => {
    try {
        
      const step = await FRAuth.next();
  
      if (step.payload.code === 401) {
        const authStep = FRAuth.getAuthStep();
        authStep.setUsername(username);
        authStep.setPassword(password);
        
        const result = await FRAuth.next(authStep);
        return result;
      }
    } catch (error) {
      console.error("Authentication failed:", error);
    }
  }
  
export default AuthenticateUser;