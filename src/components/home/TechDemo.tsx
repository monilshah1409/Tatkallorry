"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Package, Truck, CheckCircle, MapPin } from "lucide-react";

export default function TechDemo() {
    const [trackingId, setTrackingId] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "found" | "error">("idle");
    const [shipmentData, setShipmentData] = useState<any>(null);

    const handleTrack = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId) return;
        setStatus("loading");

        try {
            const res = await fetch(`/api/shipment?id=${trackingId}`);
            const data = await res.json();

            if (res.ok && data.status !== "Not Found") {
                setShipmentData(data);
                setStatus("found");
            } else {
                setShipmentData(null);
                setStatus("error");
            }
        } catch (error) {
            console.error("Tracking error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full mx-auto border-t-4 border-primary">
            <h3 className="text-xl font-bold font-heading mb-4 text-secondary">Track Your Shipment</h3>
            <form onSubmit={handleTrack} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Try: TRK-12345678"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-secondary"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-primary hover:bg-red-700 text-white p-2.5 rounded-lg transition-colors cursor-pointer"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                        </motion.div>
                    ) : (
                        <Search size={20} />
                    )}
                </button>
            </form>

            {status === "found" && shipmentData && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p className="font-bold text-green-600 flex items-center gap-1">
                                <CheckCircle size={16} /> {shipmentData.status}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Current Location</p>
                            <p className="font-bold text-secondary">{shipmentData.location}</p>
                        </div>
                    </div>

                    <div className="relative pl-6 border-l-2 border-gray-200 space-y-6">
                        {/* Render simple timeline based on API data */}
                        {shipmentData.history && shipmentData.history.map((event: any, i: number) => (
                            <div key={i} className="relative">
                                <div className={`absolute -left-[30px] p-1 rounded-full border-2 border-white ${i === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`}>
                                    <Truck size={14} />
                                </div>
                                <p className={`text-sm font-semibold ${i === 0 ? "text-primary" : "text-gray-600"}`}>{event.status}</p>
                                <p className="text-xs text-gray-400">{event.location} • {new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-3 rounded text-xs text-center text-gray-500">
                        Real-time tracking powered by Tatkalorry Tech
                    </div>
                </motion.div>
            )}

            {status === "error" && (
                <div className="text-center py-4 text-red-500 text-sm">
                    Shipment not found. Please check the tracking ID.
                </div>
            )}

            {status === "idle" && (
                <div className="text-center py-6 text-gray-400 text-sm">
                    <Truck size={48} className="mx-auto mb-2 opacity-20" />
                    <p>Enter your consignment number to see real-time status.</p>
                </div>
            )}
        </div>
    );
}
