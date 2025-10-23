import mongoose from "mongoose";
import colors from "colors"; // Ensure 'colors' package is correctly imported

export default async function connectDB() {
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  };
  try {
    const connection = await mongoose.connect(
        process.env.DATABASE,
      clientOptions
    ); // Removed deprecated options
    await mongoose.connection.db.admin().command({ ping: 1 });

    console.log(
      `Database Connected Successfully: connected at ${connection.connection.host}`
        .green
    );
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`.bgRed.white);
    // process.exit(1); // Exit the process with failure if connection fails
  }
}

// export default connectDB;
// BHJuzduQdOtQZwWk