import { useState, useEffect } from "react"

const HERO_IMG = "https://i.ibb.co/MxdsqkRS/37-F3-DFC5-F336-4-EAD-8368-9076-AA51-A0-FA.png"
const LOGO_URL = "https://i.imgur.com/1QNaGut.png"

export default function EcloreLanding() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const fn = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", fn, { passive: true })
        return () => window.removeEventListener("scroll", fn)
    }, [])

    function handleSubmit() {
        if (!email || !email.includes("@")) { setError("Please enter a valid email."); return }
        setError(""); setSubmitted(true)
    }

    const navSolid = scrollY > 60

    return (
        <div style={{ minHeight: "100vh", fontFamily: "'Cormorant Garamond',Georgia,serif", overflowX: "hidden" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes pulseDot { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
        .email-input { background:transparent; border:none; border-bottom:2px solid rgba(200,168,78,0.8); padding:13px 0; width:100%; font-family:'Jost',sans-serif; font-size:14px; font-weight:300; letter-spacing:0.1em; color:#f0e4c8; outline:none; transition:border-color 0.3s; }
        .email-input::placeholder{color:rgba(240,228,200,0.5);}
        .email-input:focus{border-bottom-color:#c8a84e;}
        .btn-notify { background:#c8a84e; border:none; color:#1a1610; font-family:'Jost',sans-serif; font-size:11px; font-weight:400; letter-spacing:0.35em; text-transform:uppercase; padding:16px 40px; cursor:pointer; transition:all 0.3s; white-space:nowrap; margin-top:16px; width:100%; }
        .btn-notify:hover{background:#e8c870;}
      `}</style>

            {/* NAV */}
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center",
                background: navSolid ? "rgba(20,14,8,0.95)" : "transparent",
                backdropFilter: navSolid ? "blur(14px)" : "none",
                transition: "all 0.4s ease",
            }}>
                <img src={LOGO_URL} alt="Eclorre" style={{ height: "52px", width: "auto", objectFit: "contain", filter: "brightness(10) saturate(0)", transition: "filter 0.4s" }} />
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'Jost',sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(200,168,78,0.9)", textTransform: "uppercase" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8a84e", animation: "pulseDot 2.5s infinite" }} />
                    Coming Soon
                </div>
            </nav>

            {/* HERO — full bleed, clean image */}
            <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
                {/* Full image */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", zIndex: 0 }} />
                
                {/* Very subtle left gradient only for email area readability */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,4,2,0.65) 0%, rgba(5,4,2,0.30) 50%, rgba(5,4,2,0.0) 100%)", zIndex: 1 }} />

                {/* Email form — bottom left */}
                <div style={{ position: "absolute", bottom: "80px", left: "52px", zIndex: 3, maxWidth: "380px", animation: "fadeIn 1s ease" }}>
                    {!submitted ? (
                        <div>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "10px", letterSpacing: "0.5em", color: "#c8a84e", textTransform: "uppercase", marginBottom: "16px" }}>
                                — Get Early Access —
                            </div>
                            <input
                                className="email-input"
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={e => { setEmail(e.target.value); setError("") }}
                                onKeyDown={e => e.key === "Enter" && handleSubmit()}
                            />
                            {error && <div style={{ fontSize: "11px", color: "#f08060", marginTop: "6px", fontFamily: "'Jost',sans-serif" }}>{error}</div>}
                            <button className="btn-notify" onClick={handleSubmit}>Notify Me</button>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "10px", color: "rgba(200,168,78,0.4)", marginTop: "10px", letterSpacing: "0.05em" }}>
                                2,400+ already on the list. No spam, ever.
                            </div>
                        </div>
                    ) : (
                        <div style={{ animation: "fadeIn 0.5s ease" }}>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "28px", color: "#f0e4c8", marginBottom: "8px" }}>You're on the list.</div>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "11px", color: "rgba(200,168,78,0.6)", letterSpacing: "0.1em" }}>We'll be in touch when Eclorre launches.</div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
