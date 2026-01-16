"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Cookies from "js-cookie";
import { ShieldCheck, Lock, User } from "lucide-react";

export default function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Hardcoded Corporate Access (In real app, verify with backend API)
        // Credentials: admin / admin123
        if (username === "admin" && password === "admin123") {
            // Set cookie that middleware checks
            Cookies.set("admin_auth", "authenticated_corporate_user", { expires: 1 }); // 1 day session
            router.push("/dashboard");
        } else {
            setError("Invalid credentials. Access denied.");
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <div className="w-full max-w-md">
                    <Reveal>
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-primary">
                            <div className="text-center mb-8">
                                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                                    <ShieldCheck size={32} />
                                </div>
                                <h1 className="text-2xl font-bold font-heading text-secondary">Corporate Login</h1>
                                <p className="text-gray-500 text-sm">Secure Admin Portal Access Only</p>
                            </div>

                            {error && (
                                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg mb-6 border border-red-100 text-center">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Username</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                                            placeholder="Enter username"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-secondary hover:bg-gray-800 text-white font-bold py-3 rounded-lg transition-all shadow-lg mt-4"
                                >
                                    Secure Sign In
                                </button>
                            </form>

                            <div className="text-center mt-6 text-xs text-gray-400">
                                <p>Unauthorized access is prohibited.</p>
                                <p>IP address logged for security.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="hidden md:block md:w-1/2 relative bg-secondary">
                <Image
                    src="/hero-bg.png"
                    alt="Logistics Dashboard"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-transparent pointer-events-none" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10">
                    <Reveal delay={0.2}>
                        <h2 className="text-4xl lg:text-5xl font-extrabold font-heading text-white mb-6 leading-tight">
                            Control Your <br />
                            <span className="text-primary">Logistics Empire.</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-gray-300 text-lg max-w-lg mx-auto">
                            Real-time tracking, fleet management, and automated workflows—all in one secure place.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
