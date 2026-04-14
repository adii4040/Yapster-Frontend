import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../Store/useAuthStore";
import { Mail, User, UserRoundPen } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify'
import {resetReqStatus} from '../utils/ResetReqStatus' 
const Profile = () => {
  const navigate = useNavigate()
  const { getCurrentUser, authUser, resendEmailVerificationToken, resendEmailVerificationTokenResData, resendEmailVerificationTokenReqStatus: { isSuccess, isError, error }, isVerifying } = useAuthStore();
  const currentUser = authUser?.data?.user

  const resendVerifyLink = () => {
    console.log("verify")
    resendEmailVerificationToken()
    console.log(resendEmailVerificationTokenResData)
  }


  useEffect(() => {
    getCurrentUser()
  }, [])

  useEffect(() => {
    if (isSuccess) {
      toast.success("Verification link sent.")
      resetReqStatus("resendEmailVerificationToken")
    }
    if (isError) {
      toast.error("Error while sending verification link")
      resetReqStatus("resendEmailVerificationToken")
    }
  }, [isError,isSuccess])


  return (
    <div className="min-h-[calc(100vh-4rem)] pt-8 pb-12">
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-base-200/50 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-base-300 transition-all hover:shadow-primary/5">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profile Hub</h1>
            <p className="mt-2 text-base-content/70">Manage your personal information and account settings</p>
          </div>

          {/* avatar upload section */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img
                src={currentUser?.avatar?.url || "/avatar.png"}
                alt="Profile"
                className="relative size-36 sm:size-40 rounded-full object-cover border-[6px] border-base-100 shadow-xl"
              />
              <div
                className="absolute p-3 rounded-full bottom-1 right-1 bg-primary text-primary-content hover:scale-110 hover:bg-primary/90 shadow-xl cursor-pointer transition-all duration-300"
                onClick={() => navigate(`/user/${currentUser?._id}/update`)}
                title="Edit Profile">
                <UserRoundPen className="size-5" />
              </div>
            </div>
            <div className="text-center mt-2">
              <h2 className="text-2xl font-bold">{currentUser?.fullname}</h2>
              <div className="badge badge-primary badge-outline mt-2 gap-2 p-3 font-semibold">
                <Mail className="size-3" />
                {currentUser?.email}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
               {/* Full Name Card */}
               <div className="p-6 bg-base-100 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                 <div className="text-sm text-primary flex items-center gap-2 mb-3 font-bold uppercase tracking-wider">
                   <User className="w-4 h-4" />
                   Full Name
                 </div>
                 <p className="text-lg truncate font-medium">{currentUser?.fullname}</p>
               </div>
               
               {/* Email Card */}
               <div className="p-6 bg-base-100 rounded-3xl border border-base-300 shadow-sm hover:shadow-md transition-shadow">
                 <div className="text-sm text-secondary flex items-center gap-2 mb-3 font-bold uppercase tracking-wider">
                   <Mail className="w-4 h-4" />
                   Email Address
                 </div>
                 <p className="text-lg truncate font-medium">{currentUser?.email}</p>
               </div>
            </div>

            {/* Email Verification Status */}
            <div className="p-6 bg-base-100 rounded-3xl border border-base-300 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                 <div className={`p-3 rounded-2xl ${currentUser?.isEmailVerified ? 'bg-success/15 text-success' : 'bg-warning/15 text-warning'}`}>
                    <Mail className="size-6" />
                 </div>
                 <div className="text-center sm:text-left">
                   <p className="font-bold text-lg mb-1">Email Verification</p>
                   {currentUser?.isEmailVerified ? (
                     <div className="flex items-center justify-center sm:justify-start gap-2 text-success font-medium">
                       <span className="relative flex h-3 w-3">
                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                         <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
                       </span>
                       Verified Securely
                     </div>
                   ) : (
                     <p className="text-warning text-sm font-medium">Verification required</p>
                   )}
                 </div>
              </div>
              {!currentUser?.isEmailVerified && (
                 <button className="btn btn-warning rounded-full px-8 font-bold" onClick={resendVerifyLink} disabled={isVerifying}>
                   {isVerifying ? "Sending..." : "Verify Now"}
                 </button>
              )}
            </div>

            {/* Account Info */}
            <div className="mt-8 pt-8 border-t border-base-300">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                 Account Info
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-base-100/50 rounded-2xl flex justify-between items-center border border-base-200">
                    <span className="text-base-content/70 font-medium">Member Since</span>
                    <span className="font-bold">{currentUser?.createdAt?.split("T")[0]}</span>
                 </div>
                 <div className="p-4 bg-base-100/50 rounded-2xl flex justify-between items-center border border-base-200">
                    <span className="text-base-content/70 font-medium">Status</span>
                    <div className="badge badge-success gap-1 font-bold">Active</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
export default Profile;