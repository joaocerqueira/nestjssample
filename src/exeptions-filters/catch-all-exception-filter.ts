import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export class CatchAllErrosExceptionFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {

        // default response
        // return super.catch(exception, host);
        
        const context = host.switchToHttp();
        const response = exception.getResponse();

        // default response
        return response.status(500).json({
            statusCode: 500,
            message: "Generic error occurred",
        }) 
    }
}