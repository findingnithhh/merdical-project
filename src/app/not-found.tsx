import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link href="/">
        <p className="text-blue-600 border border-blue-600 px-4 py-2 rounded transition duration-300 hover:bg-blue-600 hover:text-white">
          Return Home
        </p>
      </Link>
    </div>
  );
}
