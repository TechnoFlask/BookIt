import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div
        id="hero"
        className="w-screen h-[50vh] flex flex-col justify-center items-center gap-10"
      >
        <p className="text-6xl text-center">
          Find the Right Doctor, Book Instantly
        </p>
        <p className="text-3xl text-center">
          Easily schedule appointments with top doctors in just a few clicks. No
          waiting, no hassle.
        </p>
        <Button className="text-xl cursor-pointer px-5 py-8" asChild>
          <Link href="/dashboard">Book an appointment</Link>
        </Button>
      </div>
    </>
  )
}
