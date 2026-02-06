import Link from "next/link";

export default function SubNav() {
  return (
    <div className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-5 py-3 flex gap-6 text-sm">

        <Link href="/" className="hover:underline">
          Home
        </Link>

        <Link href="/designers" className="hover:underline">
          Designers
        </Link>

        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>

        <Link href="/login" className="hover:underline ml-auto">
          Login
        </Link>

      </div>
    </div>
  );
}
