
import { NextResponse } from "next/server";
import { ShipmentService } from "@/lib/shipmentService";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const search = searchParams.get("search");

    // Get specific shipment
    if (id) {
        const shipment = await ShipmentService.get(id);
        if (!shipment) {
            return NextResponse.json({
                id,
                status: "Not Found",
                location: "Unknown",
                history: []
            });
        }
        return NextResponse.json(shipment);
    }

    // Search shipments
    if (search) {
        const results = await ShipmentService.search(search);
        return NextResponse.json(results);
    }

    // List all (for admin)
    const all = await ShipmentService.getAll();
    return NextResponse.json(all);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { id, status, location, customerName, phone, destination } = body;

    if (!id || !status || !location) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if exists
    const existing = await ShipmentService.get(id);
    if (existing) {
        return NextResponse.json({ error: "Shipment ID already exists" }, { status: 409 });
    }

    const newShipment = await ShipmentService.create({
        id, status, location, customerName, phone, destination
    });

    if (!newShipment) {
        return NextResponse.json({ error: "Failed to create shipment" }, { status: 500 });
    }

    return NextResponse.json({ success: true, shipment: newShipment });
}

export async function PUT(request: Request) {
    const body = await request.json();
    const { id, status, location, ...others } = body;

    if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    // If status/location provided, use the specific updateStatus logic (which handles history)
    if (status && location) {
        const success = await ShipmentService.updateStatus(id, status, location);
        if (!success) return NextResponse.json({ error: "Update failed" }, { status: 404 });

        // If there are other fields to update (e.g. customer name fix), do that too
        if (Object.keys(others).length > 0) {
            await ShipmentService.updateDetails(id, others);
        }
    } else {
        // Just general details update
        const success = await ShipmentService.updateDetails(id, body);
        if (!success) return NextResponse.json({ error: "Update failed" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json({ error: "Missing ID" }, { status: 400 });
    }

    const success = await ShipmentService.delete(id);

    if (!success) {
        return NextResponse.json({ error: "Failed to delete or not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
}
