

export class Usuario {
    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public _id?: string,
        public role: string = 'USER_ROLE',
    ) {}
}
