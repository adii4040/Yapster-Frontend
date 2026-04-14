import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Loader, CheckCircle, XCircle } from 'lucide-react';
import { useAuthStore } from '../Store/useAuthStore';

function VerifyEmail() {

    const { userId, emailVerificationToken } = useParams()
    const { verifyEmail, isVerifying, verifyEmailReqStatus: { isSuccess, isError, error }, verifyEmailResData} = useAuthStore();

    useEffect(() => {
        verifyEmail({userId, emailVerificationToken})
    }, [verifyEmail, userId, emailVerificationToken])

    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-base-100 p-4">
            <div className="max-w-md w-full bg-base-200 rounded-3xl shadow-xl p-8 text-center">
                {isVerifying && (
                    <div className="flex flex-col items-center gap-4">
                        <Loader size={48} className="animate-spin text-primary" />
                        <h2 className="text-2xl font-bold">Verifying Email...</h2>
                        <p className="text-base-content/70">Please wait while we verify your email address.</p>
                    </div>
                )}
                
                {!isVerifying && isSuccess && (
                     <div className="flex flex-col items-center gap-4">
                        <CheckCircle size={64} className="text-success" />
                        <h2 className="text-3xl font-bold text-success">Verified!</h2>
                        <p className="text-lg mt-2">{verifyEmailResData?.message || "Your email has been successfully verified."}</p>
                        <Link to="/" className="btn btn-primary mt-6 rounded-full px-8">Continue to Yapster</Link>
                     </div>
                )}

                {!isVerifying && isError && (
                     <div className="flex flex-col items-center gap-4">
                        <XCircle size={64} className="text-error" />
                        <h2 className="text-3xl font-bold text-error">Verification Failed</h2>
                        <p className="text-lg mt-2">{error || "The verification link is invalid or has expired."}</p>
                        <Link to="/" className="btn btn-primary mt-6 rounded-full px-8">Go to Home page</Link>
                     </div>
                )}

                {!isVerifying && !isSuccess && !isError && (
                     <div className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl font-bold">Initializing Verification</h2>
                        <p className="text-base-content/70">Processing your request...</p>
                     </div>
                )}
            </div>
        </div>
    )
}

export default VerifyEmail