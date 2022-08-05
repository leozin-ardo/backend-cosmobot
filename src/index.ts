import "reflect-metadata";
import { MyDataSource } from "./infra/orm/typeorm";
import { appConfigurations } from "./main/config/app";

MyDataSource.initialize()
    .then(() => {
        appConfigurations().listen(3000, () => {
            console.log(`Server is listen on port: ${3000}`);
        });
    })
    .catch((error) => console.log(`Error on start databse because: ${error}`));

