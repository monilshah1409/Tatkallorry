// Simple in-memory store for demonstration purposes
// In a real app, this would be a database like PostgreSQL or MongoDB

interface Shipment {
    id: string;
    status: string;
    location: string;
    history: { status: string; timestamp: string; location: string }[];
}

// Global variable to persist across hot reloads in dev (somewhat)
declare global {
    var mockShipmentStore: Record<string, Shipment>;
}

if (!global.mockShipmentStore) {
    global.mockShipmentStore = {
        "TRK-12345678": {
            id: "TRK-12345678",
            status: "In Transit",
            location: "Ahmedabad Hub",
            history: [
                { status: "Order Placed", timestamp: new Date(Date.now() - 86400000).toISOString(), location: "Morbi Factory" },
                { status: "In Transit", timestamp: new Date().toISOString(), location: "Ahmedabad Hub" }
            ]
        }
    };
}

export const shipmentStore = global.mockShipmentStore;
