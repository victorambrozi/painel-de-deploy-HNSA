import {useStatus} from "../../../context/customHook/customHooks";

const MessageError = () => {
  const message = useStatus();
  return (
    <div>{message}</div>
  )
}

export default MessageError;