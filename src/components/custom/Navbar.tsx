import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-7 px-10">
      <Link className="text-2xl" href="/">
        BookIt
      </Link>
      <SignedOut>
        <SignInButton>
          <p className="text-lg cursor-pointer">Sign In</p>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-center items-center gap-5">
          <Link href="/dashboard" className="text-lg">
            Dashboard
          </Link>
          <UserButton />
        </div>
      </SignedIn>
    </nav>
  )
}
