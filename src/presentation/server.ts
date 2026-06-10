import { CronJob } from "cron";
import { CronService } from "./cron/cron-services";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { FileSystemDatasource } from "../infrastructure/datasource/file-system.datasource";

const fileSystemLogRepository=new LogRepositoryImpl(
    new FileSystemDatasource()
)

export class Server{

    public static start(){

        console.log('server started...');
    
        CronService.createJob(
            '*/5 * * * * *',
            ()=>{
                const url='https://googleaaa.com'
               
                new CheckService(
                    fileSystemLogRepository,
                    ()=>console.log(`${url} is ok`),
                    (error)=>console.log(error),
                ).execute(url)
                
                //  new CheckService().execute('http://localhost:3000')
            }
        );


  
    }


}