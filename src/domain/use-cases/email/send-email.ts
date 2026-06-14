import { error } from "console";
import { EmailService } from "../../../presentation/email/email.services";
import { LogRepository } from "../../repository/log.repository";
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";


interface SendlogsEmailUseCase{
    execute:(to:string|string[])=>Promise<boolean>

}

export class sendEmailLogs implements SendlogsEmailUseCase{

    constructor(
        private readonly emailService:EmailService,
        private readonly logRepository:LogRepository
    ){}
    async execute(to: string | string[]){

        try {
            const sent= this.emailService.sendEmailWithFileSystemLogs(to);
            const log=new LogEntity({
                message:`log email sent`,
                level:LogSeverityLevel.low,
                origin:'send-email-logs.ts'
            })
            this.logRepository.saveLog(log);
            if(!sent){
                throw new Error('Email log not sent');
            }
        } catch (error) {
            
            const log=new LogEntity({
                message:`${error}`,
                level:LogSeverityLevel.high,
                origin:'send-email-logs.ts'
            })
            this.logRepository.saveLog(log);
            return false;
        }

        return true;
    }

}