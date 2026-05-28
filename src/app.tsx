import { useState, useEffect } from "react"

const HERO_IMG = "https://i.ibb.co/MxdsqkRS/37-F3-DFC5-F336-4-EAD-8368-9076-AA51-A0-FA.png"
const LOGO_URL = "https://i.imgur.com/1QNaGut.png"

const DESIGNERS = [
    "Thebe Magugu", "Maxhosa Africa", "Kenneth Ize", "Tongoro Studio",
    "Orange Culture", "Lukhanyo Mdingi", "Andrea Iyamah", "Imane Ayissi",
    "Rich Mnisi", "Maki Oh", "Aaks", "Sindiso Khumalo",
]

function NavLogo({ scrolled }: { scrolled: boolean }) {
    return <img src={LOGO_URL} alt="Eclorre" style={{ height: "52px", width: "auto", objectFit: "contain", filter: scrolled ? "brightness(0.15) sepia(1) saturate(3) hue-rotate(5deg)" : "brightness(10) saturate(0)", transition: "filter 0.4s" }} />
}

function FooterLogo() {
    return <img src={LOGO_URL} alt="Eclorre" style={{ height: "90px", width: "auto", objectFit: "contain" }} />
}

export default function EcloreLanding() {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")
    const [scrollY, setScrollY] = useState(0)
    const [visible, setVisible] = useState(false)
    const [designerIdx, setDesignerIdx] = useState(0)
    const [fadeDesigner, setFadeDesigner] = useState(true)

    useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])
    useEffect(() => {
        const fn = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", fn, { passive: true })
        return () => window.removeEventListener("scroll", fn)
    }, [])
    useEffect(() => {
        const iv = setInterval(() => {
            setFadeDesigner(false)
            setTimeout(() => { setDesignerIdx(i => (i + 1) % DESIGNERS.length); setFadeDesigner(true) }, 380)
        }, 2800)
        return () => clearInterval(iv)
    }, [])

    function handleSubmit() {
        if (!email || !email.includes("@")) { setError("Please enter a valid email."); return }
        setError(""); setSubmitted(true)
    }

    const navSolid = scrollY > 60

    return (
        <div style={{ minHeight: "100vh", background: "#F8F5F0", color: "#1a1610", fontFamily: "'Cormorant Garamond',Georgia,serif", overflowX: "hidden" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@200;300;400&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px);} to{opacity:1;transform:translateY(0);} }
        @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
        @keyframes marquee { from{transform:translateX(0);} to{transform:translateX(-50%);} }
        @keyframes pulseDot { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
        .fu1{animation:fadeUp 1s cubic-bezier(.22,1,.36,1) .1s both;}
        .fu2{animation:fadeUp 1s cubic-bezier(.22,1,.36,1) .3s both;}
        .fu3{animation:fadeUp 1s cubic-bezier(.22,1,.36,1) .5s both;}
        .fu4{animation:fadeUp 1s cubic-bezier(.22,1,.36,1) .7s both;}
        .fu5{animation:fadeUp 1s cubic-bezier(.22,1,.36,1) .9s both;}
        .email-input { background:transparent; border:none; border-bottom:1px solid rgba(255,255,255,0.3); padding:13px 0; width:100%; font-family:'Jost',sans-serif; font-size:13px; font-weight:300; letter-spacing:0.1em; color:#f0e4c8; outline:none; transition:border-color 0.3s; }
        .email-input::placeholder{color:rgba(240,228,200,0.4);}
        .email-input:focus{border-bottom-color:#c8a84e;}
        .btn-gold { background:#c8a84e; border:none; color:#1a1610; font-family:'Jost',sans-serif; font-size:10px; font-weight:400; letter-spacing:0.35em; text-transform:uppercase; padding:15px 36px; cursor:pointer; transition:all 0.3s; white-space:nowrap; width:100%; }
        .btn-gold:hover{background:#e8c870;transform:translateY(-1px);}
        .btn-outline-light { background:transparent; border:1px solid rgba(200,168,78,0.6); color:#c8a84e; font-family:'Jost',sans-serif; font-size:10px; font-weight:300; letter-spacing:0.35em; text-transform:uppercase; padding:14px 36px; cursor:pointer; transition:all 0.3s; white-space:nowrap; }
        .btn-outline-light:hover{background:#c8a84e;color:#1a1610;}
        .feature-card{border-top:1px solid #e0d4c0;padding-top:28px;transition:border-color 0.3s;}
        .feature-card:hover{border-top-color:#c8a84e;}
        .stat-cell{background:#F8F5F0;padding:36px 24px;text-align:center;transition:background 0.3s;}
        .stat-cell:hover{background:#f0ebe2;}
        .marquee-wrap{display:flex;animation:marquee 30s linear infinite;width:max-content;}
        ::-webkit-scrollbar{width:2px;}
        ::-webkit-scrollbar-track{background:#F8F5F0;}
        ::-webkit-scrollbar-thumb{background:#d8cfc0;}
      `}</style>

            <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: navSolid ? "rgba(248,245,240,0.97)" : "transparent", backdropFilter: navSolid ? "blur(14px)" : "none", borderBottom: navSolid ? "1px solid #e8e0d4" : "1px solid transparent", transition: "all 0.4s ease" }}>
                <NavLogo scrolled={navSolid} />
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "'Jost',sans-serif", fontSize: "9px", letterSpacing: "0.25em", color: navSolid ? "#a09070" : "rgba(200,168,78,0.8)", textTransform: "uppercase" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#c8a84e", animation: "pulseDot 2.5s infinite" }} />
                    Coming Soon
                </div>
            </nav>

            <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center top", zIndex: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,4,2,0.93) 0%, rgba(5,4,2,0.80) 45%, rgba(5,4,2,0.45) 70%, rgba(5,4,2,0.20) 100%)", zIndex: 1 }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, #F8F5F0, transparent)", zIndex: 2 }} />
                <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 52px 120px", maxWidth: "600px", minHeight: "100vh" }}>
                    <div className={visible ? "fu1" : ""} style={{ fontFamily: "'Jost',sans-serif", fontSize: "9px", letterSpacing: "0.6em", color: "#c8a84e", textTransform: "uppercase", marginBottom: "32px", display: "flex", alignItems: "center", gap: "14px" }}>
                        <div style={{ width: "28px", height: "1px", background: "#c8a84e" }} />
                        The Global Index of African Fashion
                    </div>
                    <div className={visible ? "fu2" : ""} style={{ marginBottom: "24px" }}>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(42px,6vw,80px)", fontWeight: "300", lineHeight: 1.2, color: "#f0e4c8", margin: "0 0 4px" }}>Explore</h1>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(42px,6vw,80px)", fontWeight: "300", lineHeight: 1.2, color: "#c8a84e", margin: "0 0 4px", fontStyle: "italic" }}>The World's African</h1>
                        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(42px,6vw,80px)", fontWeight: "300", lineHeight: 1.2, color: "#f0e4c8", margin: 0 }}>Fashion Directory.</h1>
                    </div>
                    <div className={visible ? "fu3" : ""} style={{ marginBottom: "28px", maxWidth: "380px" }}>
                        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "14px", fontWeight: "300", lineHeight: 1.8, color: "rgba(240,228,200,0.75)", letterSpacing: "0.03em" }}>One destination. Every African fashion brand, designer, and creative house worth knowing — discovered, verified, and indexed for a global audience.</p>
                    </div>
                    <div className={visible ? "fu3" : ""} style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
                        {[{ label: "Couture", active: false }, { label: "Culture", active: true }, { label: "Elegance", active: false }].map(({ label, active }) => (
                            <span key={label} style={{ fontFamily: "'Jost',sans-serif", fontSize: "8px", letterSpacing: "0.5em", textTransform: "uppercase", padding: "7px 20px", border: "1px solid", color: active ? "#1a1610" : "rgba(200,168,78,0.7)", background: active ? "#c8a84e" : "transparent", borderColor: active ? "#c8a84e" : "rgba(200,168,78,0.4)" }}>{label}</span>
                        ))}
                    </div>
                    <div className={visible ? "fu4" : ""} style={{ marginBottom: "44px", display: "flex", alignItems: "center", gap: "12px", fontFamily: "'Jost',sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,228,200,0.4)" }}>
                        <span>Featuring</span>
                        <span style={{ color: "#c8a84e", opacity: fadeDesigner ? 1 : 0, transition: "opacity 0.38s", minWidth: "200px" }}>{DESIGNERS[designerIdx]}</span>
                    </div>
                    <div className={visible ? "fu5" : ""}>
                        {!submitted ? (
                            <div>
                                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "9px", letterSpacing: "0.4em", color: "rgba(200,168,78,0.7)", textTransform: "uppercase", marginBottom: "18px" }}>— Get Early Access —</div>
                                <div style={{ display: "flex", gap: "12px", alignItems: "flex-end", maxWidth: "460px", flexWrap: "wrap" }}>
                                    <div style={{ flex: 1, minWidth: "200px" }}>
                                        <input className="email-input" type="email" placeholder="your@email.com" value={email} onChange={e => { setEmail(e.target.value); setError("") }} onKeyDown={e => e.key === "Enter" && handleSubmit()} />
                                        {error && <div style={{ fontSize: "10px", color: "#f08060", marginTop: "6px", fontFamily: "'Jost',sans-serif" }}>{error}</div>}
                                    </div>
                                    <button className="btn-outline-light" onClick={handleSubmit}>Notify Me</button>
                                </div>
                                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "10px", color: "rgba(200,168,78,0.4)", letterSpacing: "0.05em", marginTop: "12px" }}>Get early access to the full directory. No spam, ever.</div>
                            </div>
                        ) : (
                            <div style={{ animation: "fadeIn 0.5s ease", display: "flex", alignItems: "center", gap: "14px" }}>
                                <div style={{ width: "36px", height: "36px", border: "1px solid #c8a84e", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8a84e", fontSize: "14px" }}>✓</div>
                                <div>
                                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", color: "#f0e4c8" }}>You're on the list.</div>
                                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "10px", color: "rgba(200,168,78,0.6)", letterSpacing: "0.1em", marginTop: "4px" }}>We'll be in touch when Eclorre launches.</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div style={{ position: "absolute", bottom: "80px", right: "52px", textAlign: "right", zIndex: 3 }}>
                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "36px", color: "#c8a84e", lineHeight: 1 }}>2,400+</div>
                        <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "9px", color: "rgba(200,168,78,0.5)", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "4px" }}>already waiting</div>
                    </div>
                </div>
            </section>

            <div style={{ background: "#F8F5F0", padding: "56px 52px" }}>
                <div style={{ maxWidth: "1080px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1px", background: "#e0d8cc" }}>
                    {[{ icon: "◈", title: "Verified Listings", desc: "Every brand is reviewed and approved by our editorial team — no noise, no algorithms." }, { icon: "◇", title: "Editorial Depth", desc: "Rich profiles on every listing — brand story, aesthetic direction, collections, and stockists." }, { icon: "◉", title: "54 Countries Covered", desc: "From Lagos to Nairobi, Dakar to Cape Town — the most comprehensive index of African fashion." }, { icon: "◎", title: "Built for Discovery", desc: "Search by country, category, aesthetic, or price point. The right brand, found instantly." }].map(f => (
                        <div key={f.title} style={{ background: "#F8F5F0", padding: "44px 36px", textAlign: "center" }}>
                            <div style={{ fontSize: "20px", color: "#c8a84e", marginBottom: "16px" }}>{f.icon}</div>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "9px", letterSpacing: "0.45em", color: "#1a1610", textTransform: "uppercase", marginBottom: "12px" }}>{f.title}</div>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "12px", lineHeight: 1.75, color: "#8a7060", fontWeight: "300" }}>{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ background: "#1a1610", padding: "14px 0", overflow: "hidden" }}>
                <div className="marquee-wrap">
                    {[...DESIGNERS, ...DESIGNERS].map((d, i) => (
                        <span key={i} style={{ fontFamily: "'Jost',sans-serif", fontSize: "8px", letterSpacing: "0.45em", color: "#4a4030", textTransform: "uppercase", padding: "0 28px", whiteSpace: "nowrap" }}>{d} <span style={{ color: "#c8a84e", opacity: 0.4 }}>◈</span></span>
                    ))}
                </div>
            </div>

            <section style={{ padding: "110px 52px", maxWidth: "1080px", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
                    <div>
                        <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#c8a84e", textTransform: "uppercase", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{ width: "20px", height: "1px", background: "#c8a84e" }} /> Our Mission
                        </div>
                        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(28px,4vw,50px)", fontWeight: "300", lineHeight: 1.3, color: "#1a1610", marginBottom: "28px" }}>The definitive index<br /><em style={{ color: "#c8a84e" }}>of African fashion.</em></h2>
                        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "13px", lineHeight: 1.9, color: "#7a6a50", fontWeight: "300", marginBottom: "18px" }}>Eclorre is the world's most comprehensive fashion directory dedicated to African and diaspora brands.</p>
                        <p style={{ fontFamily: "'Jost',sans-serif", fontSize: "13px", lineHeight: 1.9, color: "#7a6a50", fontWeight: "300" }}>Whether you're a fashion lover, a buyer sourcing for a retailer, or press researching a story — Eclorre is your single source of truth.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#e8e0d4" }}>
                        {[{ num: "1,000+", label: "Brands Listed" }, { num: "54", label: "Countries" }, { num: "2025", label: "Launch Year" }, { num: "∞", label: "Stories" }].map(s => (
                            <div key={s.label} className="stat-cell">
                                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "42px", fontWeight: "300", color: "#1a1610", lineHeight: 1, marginBottom: "8px" }}>{s.num}</div>
                                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "8px", letterSpacing: "0.45em", color: "#c8a84e", textTransform: "uppercase" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: "0 52px 110px", maxWidth: "1080px", margin: "0 auto" }}>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "8px", letterSpacing: "0.5em", color: "#c8a84e", textTransform: "uppercase", marginBottom: "48px", display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "20px", height: "1px", background: "#c8a84e" }} /> What's Inside the Directory
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: "40px" }}>
                    {[{ num: "01", title: "Brand Index", desc: "Hundreds of verified African fashion brands — searchable, filterable, and always up to date." }, { num: "02", title: "Deep Editorial Profiles", desc: "Every listing includes brand story, creative direction, collections, and where to shop." }, { num: "03", title: "Discover by Region", desc: "Browse by country, city, category, or aesthetic. Filter to exactly what you're looking for." }, { num: "04", title: "Trend Reports", desc: "Quarterly reports from our on-the-ground editors — what's emerging and who's rising." }].map(f => (
                        <div key={f.title} className="feature-card">
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "11px", color: "#c8a84e", letterSpacing: "0.2em", marginBottom: "12px", opacity: 0.8 }}>{f.num}</div>
                            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "20px", fontWeight: "400", color: "#1a1610", marginBottom: "12px" }}>{f.title}</div>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "12px", lineHeight: 1.8, color: "#8a7060", fontWeight: "300" }}>{f.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ position: "relative", overflow: "hidden", minHeight: "520px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_IMG})`, backgroundSize: "cover", backgroundPosition: "center 30%", zIndex: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(5,4,2,0.88)", zIndex: 1 }} />
                <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "80px 52px" }}>
                    <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "rgba(200,168,78,0.5)", textTransform: "uppercase", marginBottom: "24px" }}>◈ &nbsp; Early Access · 2025 &nbsp; ◈</div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(30px,5vw,66px)", fontWeight: "300", color: "#f0e4c8", lineHeight: 1.2, marginBottom: "10px" }}>The directory</h2>
                    <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(30px,5vw,66px)", fontWeight: "300", color: "#c8a84e", lineHeight: 1.2, marginBottom: "40px", fontStyle: "italic" }}>is open.</h2>
                    {!submitted ? (
                        <div style={{ maxWidth: "420px", margin: "0 auto" }}>
                            <input className="email-input" type="email" placeholder="your@email.com" value={email} onChange={e => { setEmail(e.target.value); setError("") }} onKeyDown={e => e.key === "Enter" && handleSubmit()} style={{ textAlign: "center" }} />
                            {error && <div style={{ fontSize: "10px", color: "#f08060", marginTop: "6px", fontFamily: "'Jost',sans-serif" }}>{error}</div>}
                            <button className="btn-gold" onClick={handleSubmit} style={{ marginTop: "16px" }}>Request Early Access</button>
                            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "10px", color: "rgba(200,168,78,0.35)", marginTop: "14px", letterSpacing: "0.1em" }}>2,400+ on the early access list</div>
                        </div>
                    ) : (
                        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "26px", color: "#c8a84e", animation: "fadeIn 0.6s ease" }}>✓ You're on the list. See you at launch.</div>
                    )}
                </div>
            </section>

            <footer style={{ padding: "52px", background: "#F0EBE0", borderTop: "1px solid #d8cdb0", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <FooterLogo />
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'Jost',sans-serif", fontSize: "8px", letterSpacing: "0.45em", color: "#b0a078", textTransform: "uppercase" }}>
                    <span>Couture</span><span style={{ color: "#c8a84e", opacity: 0.5 }}>◈</span>
                    <span>Culture</span><span style={{ color: "#c8a84e", opacity: 0.5 }}>◈</span>
                    <span>Elegance</span>
                </div>
                <div style={{ width: "100%", height: "1px", background: "linear-gradient(to right,transparent,#c8b888,transparent)" }} />
                <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center" }}>
                    {["Directory", "Brands Listed", "Editorial", "About", "Contact"].map(l => (
                        <span key={l} style={{ fontFamily: "'Jost',sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a09070", cursor: "pointer" }}>{l}</span>
                    ))}
                </div>
                <div style={{ fontFamily: "'Jost',sans-serif", fontSize: "9px", color: "#c0b8a8", letterSpacing: "0.2em", textTransform: "uppercase" }}>© 2025 Eclorre · eclorre.com · All rights reserved</div>
            </footer>
        </div>
    )
}
