/** @jsx createVNode */
import { createVNode } from "../lib";
import { globalStore } from "../stores";
import { userStorage } from "../storages";
import { router } from "../main";
const USERNAME_INPUT_ID = "username";

const login = (username) => {
  const defaultUser = { username, email: "", bio: "" };
  globalStore.setState({
    currentUser: defaultUser,
    loggedIn: true,
  });
  userStorage.set(defaultUser);
  router.push("/profile");
};
const submitLogin = (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById(USERNAME_INPUT_ID).value;

  if (!usernameInput) {
    return;
  }

  login(usernameInput);
};
export const LoginPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-8">
          항해플러스
        </h1>
        <form id="login-form" onSubmit={submitLogin}>
          <input
            type="text"
            id="username"
            placeholder="사용자 이름"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full p-2 mb-6 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            로그인
          </button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" className="text-blue-600 text-sm">
            비밀번호를 잊으셨나요?
          </a>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            새 계정 만들기
          </button>
        </div>
      </div>
    </div>
  );
};
