import { atom, selector } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: null,
});


export const isAuthenticatedState = selector({
    key: 'isAuthenticatedState',
    get: ({ get }) => {
        const user = get(userState);
        return user.isAuthenticated;
    },
});

export const userFullNameState = selector({
    key: 'userFullNameState',
    get: ({ get }) => {
        const user = get(userState);
        return `${user.FirstName} ${user.LastName}`;
    },
});