import { CronService } from "./cron/cron-services";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { LogRepositoryImpl } from "../infrastructure/repositories/log-impl.repository";
import { FileSystemDatasource } from "../infrastructure/datasource/file-system.datasource";
import { EmailService } from "./email/email.services";
import { sendEmailLogs } from "../domain/use-cases/email/send-email";

const fileSystemLogRepository=new LogRepositoryImpl(
    new FileSystemDatasource()
)
 const emailService= new EmailService();

export class Server{

    public static start(){

        console.log('server started...');
        

        new sendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute(
            ['perazajuan770@gmail.com']
        )

       // const emailService= new EmailService();
       // emailService.sendEmailWithFileSystemLogs(
        //    ['perazajuan770@gmail.com']
       // );
        
        CronService.createJob(
          '*/5 * * * * *',
            ()=>{
                const url='https://googleaaa.com'
               
                new CheckService(
                   fileSystemLogRepository,
                    ()=>console.log(`${url} is ok`),
                    (error)=>console.log(error),
                  ).execute(url)
                
                // new CheckService().execute('http://localhost:3000')
            }
        );

  
    }


}