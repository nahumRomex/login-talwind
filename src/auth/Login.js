import Form from "../components/Form";
import fibcam from '../imgenes/fibcam.jpeg'

function Login({
    setAuthState,
    setUser
}) {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form setAuthState={setAuthState} setUser={setUser}/>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-white">
        <img src={fibcam} className="objet-cover w-90 h-90"/>

      </div>
    </div>
  );
}

export default Login;
