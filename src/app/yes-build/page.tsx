'use client';
import { useState } from 'react';
import { siteConfig } from '@/config/site-config';

export default function YesBuild() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            businessName: (form.elements.namedItem('businessName') as HTMLInputElement).value,
        };

        try {
            const res = await fetch('/api/submit-yes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                const errorData = await res.json();
                alert(`Submission Failed: ${errorData.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error(err);
            alert('Connection error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
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
                    <h1 style={{ fontSize: '3rem', color: '#C0392B', textTransform: 'uppercase', fontWeight: '900' }}>Sounds good — <span style={{ color: '#FAFAFA' }}>I’ll take it from here.</span></h1>
                    <p style={{ fontSize: '1.2rem', color: '#FAFAFA', opacity: 0.7 }}>I’ll finish the website and put it live. I’ll follow up shortly once it’s set up 👍</p>
                </div>
            </main>
        );
    }

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

                <h1 style={{
                    fontSize: '3rem',
                    color: '#C0392B',
                    marginBottom: '20px',
                    lineHeight: '1.1',
                    textTransform: 'uppercase',
                    fontWeight: '900'
                }}>
                    Sounds good — I’ll <span style={{ color: '#FAFAFA' }}>take it from here.</span>
                </h1>

                <p style={{
                    fontSize: '1.2rem',
                    color: '#FAFAFA',
                    opacity: 0.7,
                    marginBottom: '40px',
                    lineHeight: '1.6'
                }}>
                    I’ll finish the website and put it live. There’s no upfront cost — just a small monthly to keep it running.
                </p>

                <form onSubmit={handleSubmit} style={{
                    backgroundColor: '#1A1A1A',
                    padding: '40px',
                    borderRadius: '8px',
                    textAlign: 'left',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                    border: '3px solid #FAFAFA'
                }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#FAFAFA', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Full Name</label>
                        <input required name="name" type="text" placeholder="John Doe" style={{ width: '100%', padding: '15px', borderRadius: '0', border: '2px solid #333', backgroundColor: '#0A0A0A', color: '#FFF', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#FAFAFA', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Email Address</label>
                        <input required name="email" type="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', borderRadius: '0', border: '2px solid #333', backgroundColor: '#0A0A0A', color: '#FFF', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#FAFAFA', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Phone Number</label>
                        <input required name="phone" type="tel" placeholder="(555) 000-0000" style={{ width: '100%', padding: '15px', borderRadius: '0', border: '2px solid #333', backgroundColor: '#0A0A0A', color: '#FFF', fontSize: '1rem' }} />
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '700', color: '#FAFAFA', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Business Name</label>
                        <input required name="businessName" type="text" placeholder="Watts Electric" style={{ width: '100%', padding: '15px', borderRadius: '0', border: '2px solid #333', backgroundColor: '#0A0A0A', color: '#FFF', fontSize: '1rem' }} />
                    </div>

                    <button type="submit" disabled={isSubmitting} style={{
                        width: '100%',
                        backgroundColor: isSubmitting ? '#333' : '#C0392B',
                        color: '#fff',
                        padding: '20px',
                        borderRadius: '0',
                        border: 'none',
                        fontSize: '1.2rem',
                        fontWeight: '900',
                        textTransform: 'uppercase',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        transform: 'skewX(-3deg)',
                        boxShadow: isSubmitting ? 'none' : `0 10px 20px rgba(192, 57, 43, 0.3)`
                    }}>
                        {isSubmitting ? 'Sending...' : 'Start My Website'}
                    </button>
                </form>
            </div>

            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        </main>
    );
}
