import Link from "next/link";
export default function blog() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl d text-blue-600 dark:text-blue-500">
        blog Page
      </h1>
      <Link
        href={"/"}
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Home Page
      </Link>
    </>
  );
}
