export class UserResponseModel {
    constructor(
        public id: string,
        public email: string,
        public theme: string,
        public pictureUrl: string,
        public googleIdToken: string,
        public jwt: string,
        public firstName?: string,
        public middleName?: string,
        public lastName?: string,
        public jwtRefresh?: string
    ){}
    public static fromJSON(userResponse: any): UserResponseModel{
        return new UserResponseModel(
            userResponse['id'],
            userResponse['email'],
            userResponse['theme'],
            userResponse['pictureUrl'],
            userResponse['googleIdToken'],
            userResponse['jwt'],
            userResponse['firstName'],
            userResponse['middleName'],
            userResponse['lastName'],
            userResponse['jwtRefresh'],
        );
    }
}