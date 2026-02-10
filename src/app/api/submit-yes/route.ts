import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, businessName } = body;

        const GHL_ACCESS_TOKEN = process.env.GHL_ACCESS_TOKEN;
        const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

        if (!GHL_ACCESS_TOKEN || !GHL_LOCATION_ID) {
            console.error('GHL credentials missing');
            return NextResponse.json({ success: true });
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
                firstName: name.split(' ')[0],
                lastName: name.split(' ').slice(1).join(' '),
                email: email,
                phone: phone,
                companyName: businessName,
                tags: ['smartsite_yes']
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
