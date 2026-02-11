'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { siteConfig } from '@/config/site-config';
import Link from 'next/link';

function QuickVideoContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const emailParam = email ? `?email=${encodeURIComponent(email)}` : '';

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
            <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
                <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: '#C0392B', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'skewX(-3deg)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
                    </div>
                    <div style={{ textAlign: 'left', lineHeight: '1' }}>
                        <div style={{ fontSize: '24px', fontWeight: '900', color: '#FAFAFA', letterSpacing: '-0.05em' }}>WATTS</div>
                        <div style={{ fontSize: '10px', fontWeight: '700', color: '#C0392B', letterSpacing: '0.2em' }}>ELECTRIC</div>
                    </div>
                </div>

                {/* Loom Video Placeholder */}
                <div style={{
                    position: 'relative',
                    paddingBottom: '56.25%',
                    height: 0,
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    marginBottom: '60px',
                    backgroundColor: '#1A1A1A',
                    border: '3px solid #C0392B'
                }}>
                    <iframe
                        src="https://www.loom.com/embed/27192df34da54e68a18d98b2801fb417"
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    ></iframe>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                    <Link href={`/yes-build${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: '#C0392B',
                            color: '#fff',
                            padding: '20px 40px',
                            borderRadius: '4px',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            cursor: 'pointer',
                            transform: 'skewX(-3deg)',
                            boxShadow: `0 10px 20px rgba(192, 57, 43, 0.3)`
                        }}>
                            YES — Finish & Put It Live
                        </button>
                    </Link>

                    <Link href={`/not-interested${emailParam}`} style={{ textDecoration: 'none' }}>
                        <button style={{
                            backgroundColor: 'transparent',
                            color: '#FAFAFA',
                            padding: '20px 40px',
                            borderRadius: '4px',
                            border: '3px solid #FAFAFA',
                            fontSize: '1.2rem',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            cursor: 'pointer',
                            transform: 'skewX(3deg)',
                            opacity: 0.8
                        }}>
                            NO — Not Interested
                        </button>
                    </Link>
                </div>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        </main>
    );
}

export default function QuickVideo() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <QuickVideoContent />
        </Suspense>
    );
}
