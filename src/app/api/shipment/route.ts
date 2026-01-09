import { NextResponse } from "next/server";
import { shipmentStore } from "@/lib/store";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Tracking ID required" }, { status: 400 });
    }

    const shipment = shipmentStore[id];

    if (!shipment) {
        // Return a default mock if not found, just for demo smoothness
        return NextResponse.json({
            id,
            status: "Not Found",
            location: "Unknown",
            history: []
        });
    }

    return NextResponse.json(shipment);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { id, status, location } = body;

    if (!id || !status || !location) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!shipmentStore[id]) {
        // Create new if doesn't exist
        shipmentStore[id] = {
            id,
            status,
            location,
            history: []
        };
    } else {
        // Update existing
        shipmentStore[id].status = status;
        shipmentStore[id].location = location;
    }

    // Add to history
    shipmentStore[id].history.unshift({
        status,
        location,
        timestamp: new Date().toISOString()
    });

    return NextResponse.json({ success: true, shipment: shipmentStore[id] });
}
