import React from "react";
import LandingAuth from "@/components/custom/landing-auth";
import NavAuth from "@/components/features/auth/nav-auth";
import SocialButton from "@/components/features/auth/social-button";
import SignUpForm from "./_components/SignUp-Form";

export default function signUpPage() {
  return (
    <main className="grid  lg:grid-cols-2 h-screen grid-cols-1 ">
      {/* loanding */}
      <LandingAuth />

      {/* Sign Up */}
      <section className="grid grid-cols-1 gap-10  justify-self-center  pb-10 lg:pb-0  ">
        {/* nav auth */}
        <NavAuth />
        {/* Form Sign Up */}
        <div>
          <SignUpForm></SignUpForm>
          <SocialButton />
        </div>
      </section>
    </main>
  );
}
