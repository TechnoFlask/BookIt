import { auth, currentUser } from "@clerk/nextjs/server"

/*

SLOTS: 

10:00-10:30
10:30-11:00
11:00-11:30
11:30-12:00
12:00-12:30
12:30-1:00

BREAK


2:00-2:30
2:30-3:00
3:00-3:30
3:30-4:00
4:00-4:30
4:30-5:00

*/

export default async function Dashboard() {
  const { userId } = await auth()
  const user = await currentUser()

  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-[1ch]">
        <p className="text-3xl">Welcome</p>
        <p className="text-3xl font-bold">
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    </div>
  )
}
