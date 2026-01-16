
import { supabase } from './supabaseClient';

export interface Shipment {
    id: string;
    status: string;
    location: string;
    history: { status: string; timestamp: string; location: string }[];
    customerName?: string;
    phone?: string;
    destination?: string;
    created_at?: string;
}

// Mock Data Store (Client-side / In-Memory fallback)
declare global {
    var mockShipmentStore: Record<string, Shipment>;
}

if (!global.mockShipmentStore) {
    global.mockShipmentStore = {
        "TRK-12345678": {
            id: "TRK-12345678",
            status: "In Transit",
            location: "Ahmedabad Hub",
            customerName: "Ramesh Tiles",
            phone: "9876543210",
            destination: "Ahmedabad",
            history: [
                { status: "Order Placed", timestamp: new Date(Date.now() - 86400000).toISOString(), location: "Morbi Factory" },
                { status: "In Transit", timestamp: new Date().toISOString(), location: "Ahmedabad Hub" }
            ],
            created_at: new Date(Date.now() - 86400000).toISOString()
        },
        "TRK-87654321": {
            id: "TRK-87654321",
            status: "Order Placed",
            location: "Morbi Factory",
            customerName: "Suresh Ceramics",
            phone: "9123456780",
            destination: "Surat",
            history: [
                { status: "Order Placed", timestamp: new Date().toISOString(), location: "Morbi Factory" }
            ],
            created_at: new Date().toISOString()
        },
        "TRK-99887766": {
            id: "TRK-99887766",
            status: "Delivered",
            location: "Rajkot Warehouse",
            customerName: "Patel Exports",
            phone: "9988776655",
            destination: "Rajkot",
            history: [
                { status: "Order Placed", timestamp: new Date(Date.now() - 172800000).toISOString(), location: "Morbi Factory" },
                { status: "In Transit", timestamp: new Date(Date.now() - 86400000).toISOString(), location: "Wankaner" },
                { status: "Delivered", timestamp: new Date().toISOString(), location: "Rajkot Warehouse" }
            ],
            created_at: new Date(Date.now() - 172800000).toISOString()
        }
    };
}

const store = global.mockShipmentStore;

export const ShipmentService = {
    async get(id: string): Promise<Shipment | null> {
        if (supabase) {
            try {
                const { data, error } = await supabase.from('shipments').select('*').eq('id', id).single();
                if (!error && data) return data;
            } catch (e) {
                console.error("Supabase error:", e);
            }
        }

        // Mock Store Case-Insensitive Lookup
        const upperId = id.toUpperCase();
        if (store[upperId]) return store[upperId];

        // Fallback: iterate keys if strict upper doesn't match (unlikely if we normalize keys, but safe)
        const key = Object.keys(store).find(k => k.toLowerCase() === id.toLowerCase());
        return key ? store[key] : null;
    },

    async search(query: string): Promise<Shipment[]> {
        const q = query.toLowerCase();
        if (supabase) {
            try {
                // Search by ID, Phone, or Customer Name
                const { data, error } = await supabase
                    .from('shipments')
                    .select('*')
                    .or(`id.ilike.%${query}%,phone.ilike.%${query}%,customerName.ilike.%${query}%`)
                    .limit(5);

                if (!error && data) return data;
            } catch (e) {
                console.error("Supabase search error:", e);
            }
        }

        // Mock Search
        return Object.values(store).filter(s =>
            s.id.toLowerCase().includes(q) ||
            (s.customerName && s.customerName.toLowerCase().includes(q)) ||
            (s.phone && s.phone.includes(q))
        );
    },

    async updateStatus(id: string, status: string, location: string): Promise<boolean> {
        if (supabase) {
            try {
                const prev = await this.get(id);
                // If not found in DB but exists in mock (mixed mode?), fail for now or handle gracefully
                if (!prev) return false;

                const newHistory = [{ status, location, timestamp: new Date().toISOString() }, ...(prev.history || [])];

                const { error } = await supabase.from('shipments').update({
                    status,
                    location,
                    history: newHistory
                }).eq('id', id);

                return !error;
            } catch (e) {
                console.error("Supabase update error:", e);
                return false;
            }
        }

        if (store[id]) {
            store[id].status = status;
            store[id].location = location;
            store[id].history.unshift({
                status,
                location,
                timestamp: new Date().toISOString()
            });
            return true;
        }
        return false;
    },

    async create(shipment: Omit<Shipment, 'history' | 'created_at'>): Promise<Shipment | null> {
        const newShipment: Shipment = {
            ...shipment,
            history: [{ status: shipment.status, location: shipment.location, timestamp: new Date().toISOString() }],
            created_at: new Date().toISOString()
        };

        if (supabase) {
            try {
                const { data, error } = await supabase.from('shipments').insert(newShipment).select().single();
                if (!error && data) return data;
            } catch (e) {
                console.error("Supabase create error:", e);
                return null;
            }
        }

        store[newShipment.id] = newShipment;
        return newShipment;
    },

    async updateDetails(id: string, updates: Partial<Shipment>): Promise<boolean> {
        if (supabase) {
            try {
                const { error } = await supabase.from('shipments').update(updates).eq('id', id);
                return !error;
            } catch (e) {
                console.error("Supabase update details error:", e);
                return false;
            }
        }

        if (store[id]) {
            store[id] = { ...store[id], ...updates };
            // If status or location changed, add to history?
            // For simple edits, maybe we just update the current state or we can be smart.
            // Let's assume manual edits might want to push history if status/location changes.
            if (updates.status || updates.location) {
                store[id].history.unshift({
                    status: updates.status || store[id].status,
                    location: updates.location || store[id].location,
                    timestamp: new Date().toISOString()
                });
            }
            return true;
        }
        return false;
    },

    async delete(id: string): Promise<boolean> {
        if (supabase) {
            try {
                const { error } = await supabase.from('shipments').delete().eq('id', id);
                return !error;
            } catch (e) {
                console.error("Supabase delete error:", e);
                return false;
            }
        }

        if (store[id]) {
            delete store[id];
            return true;
        }
        return false;
    },

    async getAll(): Promise<Shipment[]> {
        if (supabase) {
            try {
                const { data, error } = await supabase
                    .from('shipments')
                    .select('*')
                    .order('created_at', { ascending: false });
                if (!error && data) return data;
            } catch (e) {
                console.error("Supabase list error:", e);
            }
        }
        return Object.values(store).sort((a, b) =>
            (new Date(b.created_at || 0).getTime() - new Date(a.created_at || 0).getTime())
        );
    }
};
