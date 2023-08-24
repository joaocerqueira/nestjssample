import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const response = context.getResponse();

        if(exception.code == 'P2025') {
            return response.status(404).json({
                statusCode: 404,
                message: "Custom status code: 500",
                //message: exception.message,
            })
        } 
        
        // default response
        return response.status(500).json({
            statusCode: 500,
            message: "Custom status code: 500",
        })  
    }
}