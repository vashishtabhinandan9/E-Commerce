import { atom, selector } from 'recoil';

export const categoryState = atom({
    key: 'categoryState',
    default: null,
});


// export const isAuthenticatedState = selector({
//     key: 'isAuthenticatedState',
//     get: ({ get }) => {
//         const user = get(CategoryState);
//         return user.isAuthenticated;
//     },
// });

