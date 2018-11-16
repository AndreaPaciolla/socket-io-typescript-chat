import {Injectable} from "@angular/core";
import {User} from "../../chat/shared/model/user";

@Injectable()
export class CurrentUserService {

  currentUser: User = {
    id: 1,
    name: 'Andrea',
    username: 'apacho',
    avatar: ''
  }

}
