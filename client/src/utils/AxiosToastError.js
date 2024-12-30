import toast from "react-hot-toast";

const AxiosToastError = (error) => {
  const temp = error?.response?.data?.message;
  if (temp != "Provide token") toast.error(error?.response?.data?.message);
};

export default AxiosToastError;
