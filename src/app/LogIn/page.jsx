"use client"
import { authClient } from '@/lib/auth-client';
import { FieldError, Input, Label, TextField, Button, Card } from '@heroui/react';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    const SubmitFrom = async (e) => {
        e.preventDefault()
        const dataGet = new FormData(e.currentTarget)
        const userData = Object.fromEntries(dataGet.entries())
        const { data, error } = await authClient.signIn.email({
            email: userData.Email,
            password: userData.Password,
            callbackURL: "/"
        });
        if (data) {
            alert(` ${userData.Email}`)
        }
        else if (error) {
            alert(` ${error.message}`)
        }
    }
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <>
            <div className="py-20 px-10">
                <div className="text-center">
                    <h1 className='text-5xl font-bold mb-2'>Welcome !</h1>
                </div>

                <Card className="shadow-2xl max-w-4xl mx-auto p-10  mt-10">
                    <form onSubmit={SubmitFrom} className='space-y-4'>
                        {/* Email */}
                        <TextField name="Email" isRequired className={"space-y-2"}>
                            <Label className='text-[18px]'>Email Address</Label>
                            <Input type='email' placeholder="Enter your email" className="rounded-xl py-3 px-5 text-[18px] bg-[#F8FAFC]" />
                            <FieldError />
                        </TextField>
                        {/* Password */}
                        <TextField name="Password" isRequired className={"space-y-2"}>
                            <Label className='text-[18px]'>Password</Label>
                            <Input type='password' placeholder="Create a password" className="rounded-xl py-3 px-5 text-[18px] bg-[#F8FAFC]" />
                            <FieldError />
                        </TextField>

                        <div className="flex items-center justify-between">
                            <div className="text-[#6C696D] text-[18px] font-medium flex items-center gap-2">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <div className="">
                                <Link href="/" className='text-[18px] font-semibold text-[var(--primary-color)]'>Forgot password?</Link>
                            </div>
                        </div>

                        {/* button */}
                        <Button
                            type="submit"
                            variant="outline"
                            className=" w-full bg-[var(--primary-color)] text-white mt-2 font-medium">
                            Sign In
                        </Button>
                    </form>

                    <div className="flex w-full gap-4 items-center text-[#6C696D] my-4">
                        <hr className='w-full border-2' />
                        <span className='text-xl text-nowrap'>Or continue with</span>
                        <hr className='w-full border-2' />
                    </div>
                    <Button variant='outline' onClick={signIn} className="flex items-center gap-4 w-full font-medium justify-center border-2">
                        <FcGoogle />
                        <span>Sign Up With Google</span>
                    </Button>

                    <div className="text-[18px] text-[#6C696D] text-center mt-5">
                        <p>{`Don't have an account?`} <Link href="/SignUp" className='font-semibold text-[var(--primary-color)]'>Sign Up</Link></p>
                    </div>
                </Card>

            </div >
        </>
    );
};

export default LogIn;