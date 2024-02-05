import { default as app } from "./app.js";
import "dotenv/config.js";


const port = process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});