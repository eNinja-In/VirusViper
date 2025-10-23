import bcrypt from 'bcrypt'; // bcrypt for password hashing
import color from 'colors'; // For colored console output

// Function to hash a plain password
export const hashPassword = async (password) => {
    try {
        const salt = 10; // Define salt rounds
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password
        return hashedPassword; // Return hashed password
    } catch (error) {
        console.log(`Error In Hashing Encrypting : ${error}`.red); // Log error
    }
}

// Function to compare a plain password with a hashed password
export const comparePassword = (password, hashedPassword) => {
    try {
        return bcrypt.compare(password, hashedPassword); // Compare passwords
    } catch (err) {
        console.log(`Error in comparing Password : ${err}`.red); // Log error
    }
}
