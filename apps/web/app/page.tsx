import prisma from "@repo/db/client";

export default async function Home() {
  console.log("DB URL at next:", process.env.DATABASE_URL);
  const user = await prisma.user.findFirst();

  return (
    <div>
      Nextjs Page
      {user?.email}
      {user?.name}
    </div>
  )
}