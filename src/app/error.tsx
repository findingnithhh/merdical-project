"use client";
import { useEffect } from "react";
import Image from "next/image";
export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8">
        <div className="flex justify-center items-center mb-10">
          <Image src="/error.svg" alt="error" width={300} height={300} />
        </div>
        <h2 className="text-3xl font-semibold mb-4">
          Oops, looks like something went wrong!
        </h2>
        <p className="text-gray-600 mb-4">
          We're sorry, but something unexpected happened. Please try again
          later.
        </p>
      </div>
    </div>
  );
}
