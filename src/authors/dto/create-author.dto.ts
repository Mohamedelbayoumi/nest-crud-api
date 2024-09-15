export class CreateAuthorDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly phoneNumber: string;
    readonly email: string;
    readonly password: string;
    readonly description?: string;
}