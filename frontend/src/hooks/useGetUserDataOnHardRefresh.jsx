import { setLoading, setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetUserDataOnHardRefresh = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      try {
        dispatch(setLoading(true));
        const res = await axios.get(`${USER_API_END_POINT}/refresh`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setUser(res.data.user));
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }

    getData();
  }, []);
};

export default useGetUserDataOnHardRefresh;
