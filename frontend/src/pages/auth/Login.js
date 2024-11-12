import { envSetup } from "../../envSetup";
// redux store
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    fetch(`${envSetup().api_url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(login(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-4 shadow-md rounded-lg p-5 border w-96">
          <h1 className="text-4xl font-bold">Login</h1>
          <hr className="my-4" />
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <hr className="my-4" />
          <div className="flex items-center justify-between">
            <a
              href="/login"
              className="text-blue-500 hover:underline text-base"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-blue-500 hover:underline text-base"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
