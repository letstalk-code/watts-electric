'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site-config';

function NotInterestedContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');

    useEffect(() => {
        if (email) {
            fetch('/api/submit-no', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            }).catch(err => console.error('Error reporting No:', err));
        }
    }, [email]);

    return (
        <main style={{
            backgroundColor: '#0A0A0A',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            fontFamily: 'Inter, sans-serif',
            color: '#FAFAFA'
        }}>
            <div style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#C0392B', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'skewX(-3deg)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    </div>
                    <div style={{ textAlign: 'left', lineHeight: '1' }}>
                        <div style={{ fontSize: '24px', fontWeight: '900', color: '#FAFAFA', letterSpacing: '-0.05em' }}>WATTS</div>
                        <div style={{ fontSize: '10px', fontWeight: '700', color: '#C0392B', letterSpacing: '0.2em' }}>ELECTRIC</div>
                    </div>
                </div>
                <h1 style={{ fontSize: '3.5rem', color: '#C0392B', textTransform: 'uppercase', fontWeight: '900', marginBottom: '20px' }}>No problem at all.</h1>
                <p style={{ fontSize: '1.2rem', color: '#FAFAFA', opacity: 0.7 }}>If you ever change your mind, we're here to help you grow. Have a great day!</p>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        </main>
    );
}

export default function NotInterested() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <NotInterestedContent />
        </Suspense>
    );
}
