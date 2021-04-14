import useSWR from 'swr';
import userFetcher from '../apis/api-user';
import Cookies from 'js-cookie';

export default function useUser() {
	const {data, mutate, error} = useSWR('user', userFetcher);
	const loggedOut = !data && !error;
	const loading = Boolean(data === 'login' || (!data && Cookies.get('user')));
	return {
		user: data,
		loggedOut,
		loading,
		error,
		mutate
	}
}