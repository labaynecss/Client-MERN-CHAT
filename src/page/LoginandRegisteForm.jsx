import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';

export default function LoginandRegisteForm() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('register');
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  const url = isLoginOrRegister === 'register' ? 'register' : 'login';

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/${url}`, { username, password });
      setLoggedInUsername(username);
      setId(data.id);
    } catch (error) {
      console.error('Error occurred during login/register:', error);
    }
  }

  return (
    <section className="h-full">
      <div className="bg-black h-screen flex items-center">
        <div className="max-w-md mx-auto dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <form className="p-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-400 font-bold mb-2 text-sm"
                htmlFor="username">
                Username <span className="text-rose-500">*</span>
              </label>
              <input
                className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-400 font-bold mb-2 text-sm"
                htmlFor="password">
                Password <span className="text-rose-500">*</span>
              </label>
              <input
                className="appearance-none border rounded-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-indigo-800 hover:bg-indigo-700 justify-content w-full text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
              </button>
            </div>
            <div className="text-center mt-2">
              {isLoginOrRegister === 'register' && (
                <div className="text-gray-300">
                  Already a member?
                  <button
                    className="ml-1 text-sky-600"
                    onClick={() => setIsLoginOrRegister('login')}>
                    Login here
                  </button>
                </div>
              )}
              {isLoginOrRegister === 'login' && (
                <div className="text-gray-300">
                  Dont have an account?
                  <button
                    className="ml-1 text-sky-600"
                    onClick={() => setIsLoginOrRegister('register')}>
                    Register
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
