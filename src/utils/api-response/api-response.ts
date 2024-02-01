export class ApiResponse {
    constructor(
        public data: any,
        public message: string,
        public error: boolean,
        public statusCode: number
    ) {}
}