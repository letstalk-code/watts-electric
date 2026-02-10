import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const GHL_ACCESS_TOKEN = process.env.GHL_ACCESS_TOKEN;
        const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

        if (!GHL_ACCESS_TOKEN || !GHL_LOCATION_ID) {
            console.error('GHL credentials missing');
            return NextResponse.json({ success: true });
        }

        if (!email) {
            return NextResponse.json({ success: false, error: 'Email missing' }, { status: 400 });
        }

        const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GHL_ACCESS_TOKEN}`,
                'Version': '2021-07-28'
            },
            body: JSON.stringify({
                locationId: GHL_LOCATION_ID,
                email: email,
                tags: ['smartsite_no']
            }),
        });

        if (ghlResponse.ok) {
            return NextResponse.json({ success: true });
        } else {
            console.error('GHL Error:', await ghlResponse.text());
            return NextResponse.json({ success: false }, { status: 500 });
        }
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
