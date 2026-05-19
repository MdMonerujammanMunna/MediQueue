"use client"
import { authClient } from '@/lib/auth-client';
import { Button, Card, FieldError, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';


const SignUp = () => {
    const [Error, setError] = useState("");
    const SubmitFromtogo = async (e) => {
        e.preventDefault()
        const password = e.target.Password.value;
        if (!/[A-Z]/.test(password)) {
            return setError("Must have an uppercase letter");
        }

        if (!/[a-z]/.test(password)) {
            return setError("Must have a lowercase letter");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters");
        }

        setError("");

        // log in
        const dataGet = new FormData(e.currentTarget)
        const userData = Object.fromEntries(dataGet.entries())
        const { data, error } = await authClient.signUp.email({
            name: userData.Name,
            email: userData.Email,
            image: userData.image,
            password: userData.Password,
        });
        if (data) {
            toast.success(`Account Created Successfully ${userData.Name}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            redirect('/LogIn');
        }
        else if (error) {
            toast.error(`Account Created Failed ${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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
                    <h1 className='text-5xl font-bold mb-2'>Create Account</h1>
                </div>

                <Card className="shadow-2xl max-w-4xl mx-auto p-10  mt-10">
                    <form onSubmit={SubmitFromtogo} className='space-y-4'>
                        {/*  Name */}
                        <div className="">
                            <TextField name="Name" isRequired className={"space-y-2"}>
                                <Label className='text-[18px]'>Full Name</Label>
                                <Input type='text' placeholder="Enter your name" className="rounded-xl py-3 px-5 text-[18px]" variant="secondary" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Email */}
                        <TextField name="Email" isRequired className={"space-y-2"}>
                            <Label className='text-[18px]'>Email Address</Label>
                            <Input type='email' placeholder="Enter your email" className="rounded-xl py-3 px-5 text-[18px]" variant="secondary" />
                            <FieldError />
                        </TextField>
                        {/* image */}
                        <TextField isRequired name="image" type="text" className={"space-y-2"}>
                            <Label className='text-[18px]'>Image URL</Label>
                            <Input className="py-3 px-5 text-[18px]" variant="secondary" placeholder="Image URL" />
                            <FieldError />
                        </TextField>
                        {/* Password */}
                        <TextField name="Password" isRequired className={"space-y-2"}>
                            <Label className='text-[18px]'>Password</Label>
                            <Input type='password' placeholder="password" className="rounded-xl py-3 px-5 text-[18px]" variant="secondary" />
                            {Error && (
                                <p className="text-red-500 text-sm font-medium">
                                    {Error}
                                </p>
                            )}
                            <FieldError />
                        </TextField>
                        {/* button */}
                        <Button
                            type="submit"
                            variant="outline"
                            className=" w-full bg-[var(--primary-color)] text-white mt-4 font-medium">
                            Register
                        </Button>
                    </form>

                    <div className="flex w-full gap-4 items-center text-[#6C696D] my-4">
                        <hr className='w-full border-2' />
                        <span className='text-xl text-nowrap'>Or sign up with</span>
                        <hr className='w-full border-2' />
                    </div>
                    <Button variant='outline' onClick={signIn} className="flex items-center gap-4 w-full font-medium justify-center border-2">
                        <FcGoogle />
                        <span>Sign Up With Google</span>
                    </Button>

                    <div className="text-[18px] text-[#6C696D] text-center mt-5">
                        <p>Already have an account? <Link href="/LogIn" className='font-semibold text-[var(--primary-color)]'>Sign In</Link></p>
                    </div>
                </Card>

            </div >
        </>
    );
}
export default SignUp;