import { Injectable, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
import { ApiResponse } from './api-response';

@Injectable()
export class ApiResponseService {
    success(data: any, message: string = 'Success'): ApiResponse {
        return new ApiResponse(data, message, true, false);
        
    }
    error(data: any, message: string = 'Error'): ApiResponse {

        if(data instanceof InternalServerErrorException) {
            return new ApiResponse(data, 'Resource not found', false, true);
        } else if(data instanceof NotAcceptableException) {
            return new ApiResponse(data, 'Not Acceptable', false, true);
        } else {
            return new ApiResponse(data, message, false, true);
        }

    }
}
