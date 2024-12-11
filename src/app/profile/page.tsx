import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { MdError } from "react-icons/md";
import Image from "next/image";

async function Profile() {
    // Retrieve Kinde user session
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="max-w-screen-2xl mx-auto h-[700px] bg-gray-200 flex items-center justify-center">
            {/* Container */}
            <div className="w-3/4 bg-gray-100 rounded-lg flex flex-col lg:flex-row overflow-hidden">
                {/* Left Side: User Information */}
                <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">

                    {await isAuthenticated() ? (
                        <>
                            <h1 className="scroll-animate-left text-3xl md:text-4xl font-bold mb-6 text-center text-gray-700">
                                Welcome <span className="text-[#d269cc]">{user.given_name}!</span>
                            </h1>
                            <h2 className="scroll-animate-left scroll-delay-1s text-md md:text-2xl text-gray-600 font-bold text-center">
                                Profile: {user.family_name}
                            </h2>
                            <h2 className="scroll-animate-left scroll-delay-2s text-md md:text-2xl text-gray-600 font-bold text-center">
                                Email: {user.email}
                            </h2>
                        </>
                    ) : (
                        <p className="flex justify-center items-center text-center text-[#d269cc] text-lg font-medium">
                            <span className="animate-bounce">
                            <MdError size={20} />
                            </span>
                            <span className="ml-2 scroll-animate-left">Please sign in to access your profile.</span>
                        </p>

                    )}
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center">
                    <Image
                    height={100}
                    width={100}
                        src="rb_8173.png"
                        alt="Profile Illustration"
                        className="w-3/4 rounded-lg scroll-animate-right scroll-delay-1s"
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
