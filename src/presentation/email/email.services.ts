import nodemailer from 'nodemailer'
import { envs } from '../../config/plugins/envs.plugins'
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendaMailOptions{
    to:string|string[];
    subject:string;
    htmlBody:string;
    Attachments:Attachment[];
}

interface Attachment{
    filename:string,
    path:string
}

export class EmailService{

    private transporter= nodemailer.createTransport({
        service:envs.MAILER_SERVICE,
        auth:{
            user:envs.MAILER_EMAIL,
            pass:envs.MAILER_SECRET_KEY
        }
    });

    constructor(){}

    async sendEmail(options:SendaMailOptions):Promise<boolean>{
        const{to,subject,htmlBody,Attachments=[]}=options;

        try {
            

            const sentInformation= await this.transporter.sendMail({
                to,
                subject,
                html:htmlBody,
                attachments:Attachments
            })

            const log= new LogEntity({
                level:LogSeverityLevel.low,
                message:'Email sent',
                origin:'Email.service.ts'
            })
         
            return true;
        } catch (error) {
             const log= new LogEntity({
                level:LogSeverityLevel.high,
                message:'Email not sent',
                origin:'Email.service.ts'
            })
          
            return false;
        }
    }

    async sendEmailWithFileSystemLogs(to:string|string[]){
        const subject='logs del servidor'
        const htmlBody=`
        <h3>Logs de sistemas - Noc </h3>
        <p>lorem</p>
        <p>ver logs adjuntos</p>`

        const Attachments:Attachment[]=[
            {filename:'logs-all.log',path:'logs/logs-all.log'},
            {filename:'logs-high.log',path:'logs/logs-high.log'},
            {filename:'logs-medium.log',path:'logs/logs-medium.log'}
        ];
      

        return this.sendEmail({
            to,subject,Attachments,htmlBody
        });
        console.log("email enviado")
        

    }

}