"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Reveal from "@/components/ui/Reveal";

type ShipmentStatus = "Order Placed" | "In Transit" | "Out for Delivery" | "Delivered";

interface ShipmentFormData {
    trackingId: string;
    status: ShipmentStatus;
    location: string;
}

export default function AdminPanel() {
    const [message, setMessage] = useState("");
    const { register, handleSubmit, reset } = useForm<ShipmentFormData>();

    const onSubmit = async (data: ShipmentFormData) => {
        try {
            const res = await fetch("/api/shipment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: data.trackingId,
                    status: data.status,
                    location: data.location
                })
            });

            if (res.ok) {
                setMessage(`Success! Shipment ${data.trackingId} updated to '${data.status}' at ${data.location}.`);
                reset();
            } else {
                setMessage("Error updating shipment. Please try again.");
            }
        } catch (error) {
            console.error("Failed to update shipment", error);
            setMessage("System error. Check console.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-2xl">
                <Reveal>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h1 className="text-3xl font-bold font-heading text-secondary mb-6">Admin Dashboard</h1>
                        <p className="text-gray-600 mb-8">Manage active shipments and update tracking status.</p>

                        {message && (
                            <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-100">
                                {message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Shipment Tracking ID</label>
                                <input
                                    {...register("trackingId", { required: true })}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="e.g. TRK-12345678"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Current Status</label>
                                    <select
                                        {...register("status")}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                                    >
                                        <option value="Order Placed">Order Placed</option>
                                        <option value="In Transit">In Transit</option>
                                        <option value="Out for Delivery">Out for Delivery</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Current Location</label>
                                    <input
                                        {...register("location", { required: true })}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="e.g. Ahmedabad Hub"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-500/30 transition-all hover:-translate-y-1"
                            >
                                Update Shipment
                            </button>
                        </form>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
