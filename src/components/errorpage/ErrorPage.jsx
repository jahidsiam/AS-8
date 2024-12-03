import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    // <div classNameName="w-full h-[100vh] flex items-center justify-center flex-col space-y-2">
    //   <h1 classNameName="text-7xl font-semibold">Oops!</h1>
    //   <p classNameName="text-2xl">Sorry, an unexpected error has occurred.</p>
    //   <p classNameName="text-xl">
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    // </div>
    <div className="w-full h-[100vh] flex items-center justify-center flex-col space-y-2">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">{error.status}</h1>
        <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Let's get you back{" "}
          <a href="/" className="text-blue-500">
            home
          </a>
          .
        </p>
      </div>
    </div>
  );
}
