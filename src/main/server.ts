import { appConfigurations } from "./config/app";

appConfigurations().listen(3000, () => console.log("listen on port 3000"));
