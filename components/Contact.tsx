"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#201f1f] py-[80px] px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 gap-[80px] items-center">

        {/* Left */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[64px] tracking-[-0.02em] leading-[1]">
            <span className="text-white">LET&apos;S</span>
            <br />
            <span className="text-[#ffb800]">CONNECT.</span>
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#d5c4ab] text-[16px] leading-[1.5] max-w-[448px]">
            Available for high-stakes technical projects, system audits, and architectural consulting.
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <a href="mailto:alex@rivera.dev" className="flex items-center gap-4 group">
              <div className="border border-white/10 flex items-center justify-center size-10 p-px group-hover:border-[#ffb800]/50 transition-colors">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <rect x="1" y="1" width="18" height="14" rx="1" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                  <path d="M1 4L10 9.5L19 4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-inter)] text-white text-[16px] group-hover:text-[#ffb800] transition-colors">
                ALEX@RIVERA.DEV
              </span>
            </a>
            <div className="flex items-center gap-4">
              <div className="border border-white/10 flex items-center justify-center size-10 p-px">
                <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                  <path d="M8 10C9.657 10 11 8.657 11 7C11 5.343 9.657 4 8 4C6.343 4 5 5.343 5 7C5 8.657 6.343 10 8 10Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                  <path d="M8 1C5.239 1 3 3.239 3 6C3 10 8 15 8 15C8 15 13 10 13 6C13 3.239 10.761 1 8 1Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-inter)] text-white text-[16px]">
                SFO // HUB_NORTH
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="glass px-[33px] pt-[33px] pb-[49px]">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <Field label="FULL_NAME" type="text" placeholder="USER_IDENTIFICATION" />
            <Field label="EMAIL_ADDRESS" type="email" placeholder="COMMS_CHANNEL" />
            <div className="flex flex-col gap-1">
              <label className="font-[family-name:var(--font-space-mono)] text-white/40 text-[10px] uppercase tracking-wider">
                MESSAGE_PAYLOAD
              </label>
              <textarea
                placeholder="DESCRIBE_PROJECT_SCOPE..."
                rows={5}
                className="bg-white/5 border border-white/20 px-[13px] pt-[13px] pb-[85px] font-[family-name:var(--font-inter)] text-[16px] text-white placeholder:text-white/10 outline-none focus:border-[#ffb800]/50 transition-colors w-full resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#ffb800] text-[#6b4c00] font-[family-name:var(--font-space-grotesk)] text-[16px] py-4 text-center w-full transition-[filter] hover:brightness-110"
            >
              SEND_TRANSMISSION
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-[family-name:var(--font-space-mono)] text-white/40 text-[10px] uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-white/5 border border-white/20 px-[13px] py-[15px] font-[family-name:var(--font-inter)] text-[16px] text-white placeholder:text-white/10 outline-none focus:border-[#ffb800]/50 transition-colors w-full"
      />
    </div>
  );
}
