import { CronJob } from "cron";
import { CronService } from "./cron/cron-services";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { error } from "console";

export class Server{

    public static start(){

        console.log('server started...');
    
        CronService.createJob(
            '*/5 * * * * *',
            ()=>{
                const url='https://google.com'
               
                new CheckService(
                    ()=>console.log(`${url} is ok`),
                    (error)=>console.log(error),
                ).execute(url)
                
                //  new CheckService().execute('http://localhost:3000')
            }
        );


  
    }


}