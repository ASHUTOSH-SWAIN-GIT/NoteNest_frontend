"use client"
import type React from "react"
import {  IconBrandGoogle } from "@tabler/icons-react"
import { supabase } from "@/lib/supabaseClient"; // Adjust import as per your setup

export default function SignupFormDemo() {
  const handleOAuthSignIn = async () => {
    const {  error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://note-nest-frontend.vercel.app/Home', // Adjust as needed
      }
    });

    if (error) {
      console.error("Error during OAuth login:", error.message);
      return;
    }  

    // You can access user details from `data.user` (or from `session.user` if using session)
    // `data` contains `user` information
  
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black ">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 flex justify-center ">Welcome to NoteNest</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300 flex justify-center font-bold">
        Sign up to continue 
      </p>

      <div className="my-8">
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="button" // Change from submit to button
          onClick={handleOAuthSignIn} // Attach the OAuth sign-in directly here
        >
          Sign up
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button" // Use button type here too
            onClick={handleOAuthSignIn} // Trigger OAuth on click
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Google</span>
            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

