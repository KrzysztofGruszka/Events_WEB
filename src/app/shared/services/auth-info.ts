export class AuthInfo {

    constructor(
        public $uid: String
    ) {}

    isLoggedIn() {
        return !!this.$uid;
    }

}
