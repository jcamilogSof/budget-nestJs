export class ApiResponse {
    constructor(
        public data: any,
        public message: string,
        public success: boolean,
        public error: boolean
    ) {}
}