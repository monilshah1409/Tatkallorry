"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

// Schema Validation
const rfqSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    companyName: z.string().optional(),
    phone: z.string().min(10, "Phone number must be valid"),
    email: z.string().email("Invalid email address"),
    pickupLocation: z.string().min(3, "Pickup location is required"),
    dropLocation: z.string().min(3, "Drop location is required"),
    goodsType: z.string().min(1, "Please select goods type"),
    weight: z.string().min(1, "Approx. weight is required"),
});

type RFQFormData = z.infer<typeof rfqSchema>;

export default function GetQuote() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RFQFormData>({
        resolver: zodResolver(rfqSchema),
    });

    const onSubmit = async (data: RFQFormData) => {
        setIsSubmitting(true);
        // Mock API Call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form Submitted:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <Reveal>
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-4">Request a Quote</h1>
                        <p className="text-gray-600">Fill in the details below to get a competitive shipping quote tailored to your needs.</p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Quote Requested!</h3>
                                <p className="text-gray-600 mb-8">
                                    Thank you. Our logistics team will review your requirements and get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setIsSuccess(false)}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Submit another request
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            {...register("fullName")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.fullName ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                            placeholder="John Doe"
                                        />
                                        {errors.fullName && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.fullName.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name (Optional)</label>
                                        <input
                                            {...register("companyName")}
                                            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                            placeholder="Your Company Ltd."
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            {...register("phone")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                            placeholder="+91 99999 99999"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.phone.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            {...register("email")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6"></div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Pickup Location *</label>
                                        <input
                                            {...register("pickupLocation")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.pickupLocation ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                            placeholder="City, Area"
                                        />
                                        {errors.pickupLocation && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.pickupLocation.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Drop Location *</label>
                                        <input
                                            {...register("dropLocation")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.dropLocation ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                            placeholder="City, Area"
                                        />
                                        {errors.dropLocation && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.dropLocation.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Type of Goods *</label>
                                        <select
                                            {...register("goodsType")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white ${errors.goodsType ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="Ceramic Tiles">Ceramic Tiles</option>
                                            <option value="Sanitaryware">Sanitaryware</option>
                                            <option value="Raw Materials">Raw Materials</option>
                                            <option value="Machinery">Machinery</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {errors.goodsType && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.goodsType.message}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Approx. Weight (kg/tons) *</label>
                                        <input
                                            {...register("weight")}
                                            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${errors.weight ? "border-red-500 bg-red-50" : "border-gray-200"
                                                }`}
                                            placeholder="e.g. 5 Tons"
                                        />
                                        {errors.weight && (
                                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                                <AlertCircle size={12} /> {errors.weight.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? "Processing..." : "Get My Quote"}
                                    </button>
                                    <p className="text-center text-xs text-gray-400 mt-4">
                                        By submitting, you agree to our privacy policy. Your data is secure.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
