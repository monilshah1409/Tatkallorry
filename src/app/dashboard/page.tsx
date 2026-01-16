"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Reveal from "@/components/ui/Reveal";
import { Copy, Plus, ArrowRight, PauseCircle, RefreshCw, CheckCircle, MapPin, Truck, Pencil, X, Search, Trash2, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type ShipmentStatus = "Order Placed" | "In Transit" | "Out for Delivery" | "Delivered" | "On Hold";

const STATUS_FLOW: ShipmentStatus[] = ["Order Placed", "In Transit", "Out for Delivery", "Delivered"];

export default function AdminPanel() {
    const [shipments, setShipments] = useState<any[]>([]);
    const [displayShipments, setDisplayShipments] = useState<any[]>([]); // Filtered list
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<string | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingShipment, setEditingShipment] = useState<any | null>(null);
    const router = useRouter();

    const { register, handleSubmit, reset } = useForm();
    const { register: registerEdit, handleSubmit: handleSubmitEdit, reset: resetEdit, setValue: setValueEdit } = useForm();

    const fetchShipments = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/shipment");
            const data = await res.json();
            if (Array.isArray(data)) {
                setShipments(data);
                setDisplayShipments(data);
            }
        } catch (e) {
            console.error("Failed to load shipments");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Client-side protection (Double check)
        // If middleware fails or bypasses, this will kick unauthorized users out
        const auth = Cookies.get("admin_auth");
        if (auth !== "authenticated_corporate_user") {
            router.push("/admin");
        } else {
            fetchShipments();
        }
    }, [router]);

    // Quick Update (Next Stage / Hold)
    const quickUpdateStatus = async (id: string, newStatus: string, currentLocation: string = "") => {
        setActionLoading(id);
        const currentShipment = shipments.find(s => s.id === id);
        try {
            const res = await fetch("/api/shipment", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id,
                    status: newStatus,
                    location: currentLocation || currentShipment.location
                })
            });

            if (res.ok) {
                await fetchShipments();
            }
        } catch (e) {
            console.error(e);
        } finally {
            setActionLoading(null);
        }
    };

    const onCreateSubmit = async (data: any) => {
        try {
            const res = await fetch("/api/shipment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, status: "Order Placed" }) // Default status
            });

            if (res.ok) {
                setShowCreateModal(false);
                reset();
                fetchShipments();
            } else {
                alert("Failed to create. ID might explicitly exist.");
            }
        } catch (e) {
            console.error(e);
        }
    };

    const onEditSubmit = async (data: any) => {
        if (!editingShipment) return;
        try {
            const res = await fetch("/api/shipment", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: editingShipment.id, ...data })
            });

            if (res.ok) {
                setEditingShipment(null);
                fetchShipments();
            }
        } catch (e) {
            console.error(e);
        }
    };

    const openEditModal = (shipment: any) => {
        setEditingShipment(shipment);
        setValueEdit("location", shipment.location);
        setValueEdit("status", shipment.status);
    };

    const getNextStatus = (current: ShipmentStatus): ShipmentStatus | null => {
        const idx = STATUS_FLOW.indexOf(current);
        if (idx >= 0 && idx < STATUS_FLOW.length - 1) {
            return STATUS_FLOW[idx + 1];
        }
        return null;
    };

    const deleteShipment = async (id: string) => {
        if (!confirm("Are you sure you want to delete this shipment? This action cannot be undone.")) return;

        setActionLoading(id);
        try {
            const res = await fetch(`/api/shipment?id=${id}`, { method: "DELETE" });
            if (res.ok) {
                await fetchShipments();
            } else {
                alert("Failed to delete shipment");
            }
        } catch (e) {
            console.error(e);
        } finally {
            setActionLoading(null);
        }
    };

    const handleLogout = () => {
        Cookies.remove("admin_auth");
        router.push("/admin");
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value.toLowerCase();
        const filtered = shipments.filter(s =>
            s.id.toLowerCase().includes(q) ||
            (s.customerName && s.customerName.toLowerCase().includes(q)) ||
            (s.phone && s.phone.includes(q))
        );
        setDisplayShipments(filtered);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-6xl">
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-3xl font-bold font-heading text-secondary mb-2">Admin Dashboard</h1>
                                <p className="text-gray-600">Manage active shipments and statuses.</p>
                            </div>
                            <button onClick={handleLogout} className="text-red-500 hover:text-red-700 font-bold text-xs flex items-center gap-1 border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 transition-colors">
                                <LogOut size={12} /> Logout
                            </button>
                        </div>

                        {/* Search & Actions */}
                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            {/* Autocomplete Search for Admin */}
                            <div className="relative w-full md:w-80">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search size={16} className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search ID, Name, Phone..."
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm transition-all"
                                    onChange={handleSearch}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">⌘K</span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={fetchShipments}
                                    className="p-3 bg-white rounded-full shadow hover:shadow-md transition-all text-gray-500 hover:text-primary"
                                    title="Refresh"
                                >
                                    <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
                                </button>
                                <button
                                    onClick={() => setShowCreateModal(true)}
                                    className="flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-red-500/20 transition-all hover:-translate-y-1 whitespace-nowrap"
                                >
                                    <Plus size={20} /> New Shipment
                                </button>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                    {/* Headings */}
                    <div className="grid grid-cols-12 bg-gray-50 p-4 border-b border-gray-100 font-bold text-gray-500 text-sm hidden md:grid">
                        <div className="col-span-3">ID & Customer</div>
                        <div className="col-span-3">Location & Route</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-4 text-right">Actions</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {displayShipments.map((shipment) => {
                            const nextStatus = getNextStatus(shipment.status);
                            const isProcessing = actionLoading === shipment.id;

                            return (
                                <Reveal key={shipment.id} width="100%">
                                    <div className="grid grid-cols-1 md:grid-cols-12 p-4 items-center hover:bg-gray-50 transition-colors gap-4 md:gap-0">
                                        <div className="col-span-3">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-mono font-bold text-secondary text-lg md:text-base">{shipment.id}</span>
                                                <button className="text-gray-400 hover:text-primary transition-colors" title="Copy ID" onClick={() => navigator.clipboard.writeText(shipment.id)}>
                                                    <Copy size={12} />
                                                </button>
                                            </div>
                                            <p className="text-sm text-gray-600 font-medium">{shipment.customerName || "Unknown Customer"}</p>
                                            <p className="text-xs text-gray-400">{shipment.phone}</p>
                                        </div>

                                        <div className="col-span-3">
                                            <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                                                <MapPin size={14} className="text-primary" />
                                                {shipment.location}
                                            </div>
                                            {shipment.destination && (
                                                <div className="flex items-center gap-1 text-xs text-gray-400">
                                                    <ArrowRight size={12} />
                                                    To: {shipment.destination}
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-span-2">
                                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${shipment.status === "Delivered" ? "bg-green-100 text-green-700 border-green-200" :
                                                shipment.status === "On Hold" ? "bg-amber-100 text-amber-700 border-amber-200" :
                                                    "bg-blue-50 text-blue-600 border-blue-100"
                                                }`}>
                                                {shipment.status === "Delivered" ? <CheckCircle size={10} /> : <Truck size={10} />}
                                                {shipment.status}
                                            </span>
                                        </div>

                                        <div className="col-span-4 flex flex-wrap justify-end gap-2 text-right">
                                            {nextStatus && (
                                                <button
                                                    disabled={isProcessing}
                                                    onClick={() => quickUpdateStatus(shipment.id, nextStatus)}
                                                    className="flex items-center gap-1 bg-primary hover:bg-red-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-all shadow-sm hover:shadow active:scale-95 disabled:opacity-50"
                                                >
                                                    {isProcessing ? "..." : `Next: ${nextStatus}`}
                                                    {!isProcessing && <ArrowRight size={12} />}
                                                </button>
                                            )}

                                            {shipment.status !== "On Hold" && shipment.status !== "Delivered" && (
                                                <button
                                                    disabled={isProcessing}
                                                    onClick={() => quickUpdateStatus(shipment.id, "On Hold")}
                                                    className="flex items-center gap-1 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-xs font-bold px-3 py-2 rounded-lg transition-all disabled:opacity-50"
                                                >
                                                    <PauseCircle size={14} /> Hold
                                                </button>
                                            )}

                                            <button
                                                onClick={() => openEditModal(shipment)}
                                                className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors"
                                                title="Edit Details"
                                            >
                                                <Pencil size={14} />
                                            </button>

                                            <button
                                                onClick={() => deleteShipment(shipment.id)}
                                                className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                                                title="Delete Shipment"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}

                        {shipments.length === 0 && !loading && (
                            <div className="p-12 text-center text-gray-400">
                                <p>No shipments found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Create Modal */}
            <AnimatePresence>
                {showCreateModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
                        >
                            <button onClick={() => setShowCreateModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                                <X size={20} />
                            </button>
                            <h2 className="text-xl font-bold font-heading mb-6">Create New Shipment</h2>
                            <form onSubmit={handleSubmit(onCreateSubmit)} className="space-y-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-1">Tracking ID</label>
                                    <input {...register("id", { required: true })} placeholder="e.g. TRK-NEW-001" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-1">Customer Name</label>
                                    <input {...register("customerName", { required: true })} placeholder="John Doe" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-bold text-gray-700 block mb-1">Phone</label>
                                        <input {...register("phone", { required: true })} placeholder="999..." className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-gray-700 block mb-1">Start Location</label>
                                        <input {...register("location", { required: true })} placeholder="Origin" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-1">Destination</label>
                                    <input {...register("destination", { required: true })} placeholder="City/State" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all">Create Shipment</button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Edit Modal */}
            <AnimatePresence>
                {editingShipment && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
                        >
                            <button onClick={() => setEditingShipment(null)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
                                <X size={20} />
                            </button>
                            <h2 className="text-xl font-bold font-heading mb-2">Update Shipment</h2>
                            <p className="text-sm text-gray-500 mb-6 font-mono">{editingShipment.id}</p>

                            <form onSubmit={handleSubmitEdit(onEditSubmit)} className="space-y-4">
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-1">Current Status</label>
                                    <select {...registerEdit("status")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                                        {["Order Placed", "In Transit", "Out for Delivery", "Delivered", "On Hold"].map(s => (
                                            <option key={s} value={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-bold text-gray-700 block mb-1">Current Location</label>
                                    <input {...registerEdit("location")} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
                                </div>

                                <button type="submit" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all">Update Details</button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
