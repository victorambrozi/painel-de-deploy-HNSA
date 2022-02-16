import * as Custom from "../../../context/customHook/customHooks";

const MessageError = () => {
  const message = Custom.useStatus();
  return (
    <div>{message}</div>
  )
}

export default MessageError;