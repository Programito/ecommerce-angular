

export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public id?: string,
        public role: string = 'USER_ROLE',
    ) {}
}
