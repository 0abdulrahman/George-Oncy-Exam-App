import React from "react";
import NavAuth from "@/components/features/auth/nav-auth";
import SocialButton from "@/components/features/auth/social-button";
import LandingAuth from "@/components/custom/landing-auth";
import LoginForm from "./_components/Login-Form";

export default function signInPage() {
  return (
    <main className="grid  lg:grid-cols-2 h-screen grid-cols-1 ">
      {/* loanding */}
      <LandingAuth />
      {/*  Sign in */}
      <section className="grid grid-cols-1 gap-10  justify-self-center  pb-10 lg:pb-0    ">
        {/* nav auth */}
        <NavAuth />
        {/* Form Sign in */}
        <div>
          <LoginForm></LoginForm>
          <SocialButton />
        </div>
      </section>
    </main>
  );
}
