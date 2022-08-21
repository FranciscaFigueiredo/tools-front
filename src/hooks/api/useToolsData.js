import useAsync from '../useAsync';

import * as hotelApi from '../../services/hotelApi';
import useToken from '../useToken';

export default function useHotelData() {
  const token = useToken();

  const {
    data: hotels,
    loading: hotelLoading,
    error: hotelError,
    act: getHotel,
  } = useAsync(() => hotelApi.getHotelInformation({ token, eventId: 1 }));

  return {
    hotels,
    hotelLoading,
    hotelError,
    getHotel,
  };
}