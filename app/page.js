"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1 className="text-4xl font-extrabold dark:text-white">Home Page </h1>
      {/* Linking and Navigating */}
      {/* There are two ways to navigate between routes: 1) <Link> Component 2) useRouter Hook */}
      {/* 1)  <Link> Component */}
      <Link
        href="/blog"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Navigate Blog Page
      </Link>
      <p></p>
      {/* 2) useRouter Hook */}
      <button
        type="button"
        onClick={() => router.push("/blog")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Blog Page
      </button>
    </div>
  );
}
