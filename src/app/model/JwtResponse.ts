export class JwtResponse {
    public name: string;
    public token: string;
    public roles: string[];

    constructor(name: string, token: string, roles: string[]) {
        this.name = name;
        this.token = token;
        this.roles = roles;
    }
}
