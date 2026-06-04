"use client";
import { authClient } from "@/lib/auth-client";

async function signUp({
  email,
  password,
  name,
  image,
}: {
  email: string;
  password: string;
  name: string;
  image?: string;
}) {
  const { data, error } = await authClient.signUp.email(
    {
      email, // user email address
      password, // user password -> min 8 characters by default
      name, // user display name
      image, // User image URL (optional)
      callbackURL: "/dashboard", // A URL to redirect to after the user verifies their email (optional)
    },
    {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        console.log("user created successfully");
      },
      onError: (ctx) => {
        console.log("Error creating user: ", ctx);
      },
    },
  );
}

export default function Home() {
  return (
    <div>
      <button
        onClick={async () =>
          await signUp({
            email: "jackson20062008@gmail.com",
            name: "Egorchik",
            password: "123123123",
          })
        }
      >
        Create User
      </button>
    </div>
  );
}
