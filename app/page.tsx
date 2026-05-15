export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Discord Bot
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-Kick Inactive Users from{" "}
          <span className="text-[#58a6ff]">Discord Voice Channels</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitors your voice channels 24/7 and automatically moves or kicks users who are muted or deafened for too long — keeping your community active and your channels clean.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $8/mo
        </a>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-[#8b949e]">
          <li className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
            <span className="block text-white font-semibold mb-1">Real-Time Monitoring</span>
            Tracks mute/deafen state via Discord bot API
          </li>
          <li className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
            <span className="block text-white font-semibold mb-1">Custom Rules</span>
            Set timeouts per channel or per role
          </li>
          <li className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3">
            <span className="block text-white font-semibold mb-1">Activity Logs</span>
            Full audit trail of every kick and move
          </li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$8</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li>✓ Unlimited Discord servers</li>
            <li>✓ Unlimited voice channels</li>
            <li>✓ Custom inactivity timeouts</li>
            <li>✓ Kick or move actions</li>
            <li>✓ Activity dashboard &amp; logs</li>
            <li>✓ Webhook notifications</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-1">How does the bot detect inactivity?</p>
            <p className="text-[#8b949e] text-sm">The bot listens to Discord voice state events. If a user is server-muted, self-muted, or deafened for longer than your configured timeout, it triggers the kick or move action automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-1">Do I need to host anything myself?</p>
            <p className="text-[#8b949e] text-sm">No. The bot runs on our infrastructure. Just invite it to your server, configure your rules in the dashboard, and it works immediately — no servers or code required.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <p className="font-semibold text-white mb-1">Can I set different rules for different channels?</p>
            <p className="text-[#8b949e] text-sm">Yes. You can configure unique inactivity timeouts and actions (kick vs. move to AFK channel) on a per-channel or per-role basis from the admin dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} Discord Voice Auto-Kicker. All rights reserved.
      </footer>
    </main>
  );
}
