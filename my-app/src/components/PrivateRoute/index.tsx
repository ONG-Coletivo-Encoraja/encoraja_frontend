import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { APP_ROUTES } from '@/constants/app-routes';
import { checkUserAuthenticated } from '@/functions/check-user-authenticated';

type PrivateRouteProps = {
    children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { push } = useRouter();

    const isUserAuthenticated = checkUserAuthenticated();

    useEffect(() => {
        console.log('User is authenticated:', isUserAuthenticated);
        if(!isUserAuthenticated) {
            push(APP_ROUTES.public.login);
        }
    }, [isUserAuthenticated, push])

    return (
        <>
            {!isUserAuthenticated && null}
            {isUserAuthenticated && children} 
        </>
    )
}

export default PrivateRoute;