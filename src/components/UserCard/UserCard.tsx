import s from './UserCard.module.css';
import { IUser } from '../../models';

interface PostProps {
    userItem: IUser,
    buttonPressed: any
    cardUserId: any
}

export function UserCard({ userItem, buttonPressed, cardUserId }: PostProps, ) {

    let myLiClass = cardUserId ? s.info_list__item_smaller : s.info_list__item;

    return (
        <div className={`${cardUserId ? s.simple_user__card_smaller : s.simple_user__card }`}>
            <ul className={s.user_info__list}>
                <li className={`${myLiClass}`}>{userItem.name}</li>
                <li className={`${myLiClass}`}>{userItem.email}</li>
                <li className={`${myLiClass}`}>{userItem.phone}</li>
            </ul>
            <button className={`${cardUserId ? s.show_user__posts_smaller : s.show_user__posts}`} onClick={() => buttonPressed(userItem.id)}>Show Posts</button>
        </div>
    );
}

