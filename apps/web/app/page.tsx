import prisma from "@repo/db/client";

// this file is staticcally generated at build time
export default async function Home() {
  console.log("DB URL at next:", process.env.DATABASE_URL);
  const user = await prisma.user.findFirst();

  return (
    <div>
      Nextjs Page Updated for deployement
      {user?.email}
      {user?.name}
    </div>
  )
}