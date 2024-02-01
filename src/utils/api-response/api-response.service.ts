import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { ApiResponse } from './api-response';

@Injectable()
export class ApiResponseService {
    success(data: any, message: string = 'Success'): ApiResponse {
        return new ApiResponse(data, message, null, 200); 
    }
    error(data: any, message: string = 'Error'): ApiResponse {

        if(data instanceof InternalServerErrorException) {
            return new ApiResponse(data, 'Resource not found', false, 500);
        } else if(data instanceof NotAcceptableException) {
            return new ApiResponse(data, 'Not Acceptable', false, 500);
        } else {
            return new ApiResponse(data, message, false, 500);
        }

    }
}
