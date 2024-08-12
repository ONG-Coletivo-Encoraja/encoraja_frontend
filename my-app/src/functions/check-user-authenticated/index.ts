const getStorageItem = (key: string) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null;
};

export const checkUserAuthenticated = () => {
    const userToken = getStorageItem(process.env.NEXT_PUBLIC_USER_TOKEN ?? '');
    return !!userToken;
};
