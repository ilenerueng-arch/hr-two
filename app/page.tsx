// ===== ข้อมูลร้าน — แก้ตรงนี้ได้เลย =====
const LINE_ID = "@hrwto"; // ตัวอย่าง: เปลี่ยนเป็น LINE ID จริง
const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;
const OPEN_HOURS = "จันทร์–ศุกร์ 09:00–18:00 น."; // ตัวอย่าง

const features = [
  {
    icon: "tap",
    title: "ใช้ง่าย กดไม่กี่ครั้ง",
    text: "ปุ่มใหญ่ ไอคอนชัด ตัวหนังสือน้อย พนักงานที่ไม่คุ้นมือถือก็ลา เช็คเงินเดือน ดูกะงานได้เองโดยไม่ต้องถามใคร",
  },
  {
    icon: "lang",
    title: "2 ภาษา ไทย–พม่า",
    text: "สลับภาษาได้ในปุ่มเดียว พนักงานชาวเมียนมาอ่านเข้าใจทันที ลดการสื่อสารผิดพลาด ลดงานอธิบายของ HR",
  },
  {
    icon: "pic",
    title: "ภาพสวย ดูแล้วเข้าใจ",
    text: "ใช้ภาพและสีบอกความหมาย เช่น สีเขียว = อนุมัติแล้ว ทำให้ดูรู้เรื่องแม้อ่านหนังสือได้ไม่คล่อง",
  },
];

const services = [
  {
    who: "สำหรับพนักงาน",
    items: [
      "ขอลา / ดูวันลาคงเหลือ",
      "ดูสลิปเงินเดือน",
      "ดูตารางกะงาน",
      "รับประกาศจากบริษัท",
    ],
  },
  {
    who: "สำหรับ HR admin",
    items: [
      "อนุมัติคำขอลาในคลิกเดียว",
      "จัดการข้อมูลพนักงาน",
      "ส่งประกาศ 2 ภาษาพร้อมกัน",
      "สรุปรายงานรายเดือน",
    ],
  },
];

const faqs = [
  {
    q: "พนักงานไม่เก่งเทคโนโลยี จะใช้ได้ไหม?",
    a: "ได้ค่ะ หน้าจอออกแบบให้ใช้ภาพและปุ่มใหญ่เป็นหลัก ส่วนใหญ่ลองกดครั้งเดียวก็ใช้เป็น และเรามีคู่มือแบบรูปภาพให้ด้วย",
  },
  {
    q: "ต้องติดตั้งแอปไหม?",
    a: "ไม่ต้องค่ะ เปิดผ่านเบราว์เซอร์ในมือถือได้เลย ใช้ได้ทั้ง Android และ iPhone",
  },
  {
    q: "เปลี่ยนภาษาไทย–พม่ายังไง?",
    a: "กดปุ่มธงภาษาที่มุมบนของหน้าจอ ระบบจะจำภาษาที่เลือกไว้ให้ครั้งต่อไป",
  },
  {
    q: "ราคาเท่าไร?",
    a: "ขึ้นอยู่กับจำนวนพนักงานและฟังก์ชันที่ต้องการ ทักไลน์มาคุยกันได้เลย เราจะแนะนำแพ็กเกจที่คุ้มที่สุดให้",
  },
];

function Icon({ name, className = "h-7 w-7" }: { name: string; className?: string }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "tap":
      return (
        <svg {...common}>
          <path d="M9 11V5a2 2 0 1 1 4 0v5" />
          <path d="M13 10a2 2 0 1 1 4 0v1a2 2 0 1 1 4 0v4a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.4l-2.6-4.4a2 2 0 0 1 3.4-2.1L9 14" />
        </svg>
      );
    case "lang":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "pic":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <circle cx="9" cy="10" r="2" />
          <path d="m21 16-5-5-9 9" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 12 5 5 9-10" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    default:
      return null;
  }
}

function LineIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6C21.4 14.3 22 12.7 22 11c0-4.4-4.5-8-10-8Z" />
    </svg>
  );
}

function LineButton({ big = false }: { big?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line font-semibold text-white shadow-[0_4px_0_#04943f] transition hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none ${
        big ? "px-8 py-4 text-lead" : "px-6 py-3 text-body"
      }`}
    >
      <LineIcon />
      ทักไลน์เลย
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      {/* ดาวตกแต่ง */}
      <span className="absolute -left-6 top-6 text-4xl text-sun" aria-hidden>
        ✦
      </span>
      <span className="absolute -right-4 bottom-16 text-2xl text-green-500" aria-hidden>
        ✦
      </span>
      <div className="card-pop overflow-hidden rounded-[2.2rem] p-3">
        <div className="rounded-[1.6rem] bg-green-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-green-900">HR WTO</span>
            <span className="flex overflow-hidden rounded-full border border-green-700 text-xs font-semibold">
              <span className="bg-green-700 px-2.5 py-1 text-white">ไทย</span>
              <span className="px-2.5 py-1 text-green-900">မြန်မာ</span>
            </span>
          </div>
          <p className="mt-4 text-lg font-bold text-green-900">สวัสดี คุณมินต์ 👋</p>
          <p className="text-xs text-ink-soft">မင်္ဂလာပါ</p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {[
              { e: "🌴", t: "ขอลา" },
              { e: "💰", t: "เงินเดือน" },
              { e: "📅", t: "กะงาน" },
              { e: "📢", t: "ประกาศ" },
            ].map((b) => (
              <div
                key={b.t}
                className="flex flex-col items-center gap-1 rounded-2xl border border-green-200 bg-white py-3 text-sm font-semibold text-green-900"
              >
                <span className="text-2xl" aria-hidden>
                  {b.e}
                </span>
                {b.t}
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white p-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-white">
              <Icon name="check" className="h-5 w-5" />
            </span>
            <div className="text-xs">
              <p className="font-semibold text-green-900">อนุมัติวันลาแล้ว</p>
              <p className="text-ink-soft">12 พ.ย. • 1 วัน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ===== แถบบน ===== */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-green-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-700 text-white">
            HR
          </span>
          HR WTO
        </a>
        <nav className="hidden gap-6 text-body text-ink-soft md:flex">
          <a href="#features" className="hover:text-green-700">จุดเด่น</a>
          <a href="#services" className="hover:text-green-700">บริการ</a>
          <a href="#faq" className="hover:text-green-700">คำถามที่พบบ่อย</a>
          <a href="#contact" className="hover:text-green-700">ติดต่อเรา</a>
        </nav>
      </header>

      {/* ===== ส่วนหัว ===== */}
      <section className="relative">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-green-50 to-cream"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-8 sm:px-6 md:grid-cols-2 md:pt-16">
          <div className="text-center md:text-left">
            <span className="inline-block rounded-full bg-green-200 px-4 py-1 text-sm font-semibold text-green-900">
              ระบบ HR ภาษาไทย–พม่า
            </span>
            <h1 className="mt-5 text-balance text-display font-bold text-green-900">
              เรื่อง HR ง่ายขึ้น
              <br />
              <span className="text-green-500">สำหรับทุกคนในทีม</span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lead text-ink-soft md:mx-0">
              เว็บ HR ที่พนักงานไทยและพม่าใช้เองได้ทันที ลา ดูเงินเดือน ดูกะงาน
              ในไม่กี่คลิก ส่วน HR admin ก็จัดการงานได้ไว ไม่ต้องตอบคำถามซ้ำ ๆ
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <LineButton big />
              <a
                href="#features"
                className="rounded-full border-2 border-green-700 px-6 py-3.5 font-semibold text-green-700 hover:bg-green-50"
              >
                ดูจุดเด่น
              </a>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      {/* ===== จุดเด่น ===== */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-6 px-4 py-16 sm:px-6">
        <h2 className="text-center text-title font-bold text-green-900">ทำไมต้อง HR WTO</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-body text-ink-soft">
          ออกแบบมาเพื่อคนทำงานจริง ทั้งพนักงานหน้างานและทีม HR
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card-pop p-6">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                <Icon name={f.icon} />
              </span>
              <h3 className="mt-4 text-xl font-bold text-green-900">{f.title}</h3>
              <p className="mt-2 text-body text-ink-soft">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== บริการ ===== */}
      <section id="services" className="scroll-mt-6 bg-green-700 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-title font-bold">ทำอะไรได้บ้าง</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-body text-green-200">
            ครบทุกงาน HR ประจำวัน ในเว็บเดียว
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.who} className="rounded-3xl bg-white p-6 text-ink sm:p-8">
                <h3 className="text-xl font-bold text-green-900">{s.who}</h3>
                <ul className="mt-4 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-body">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-700">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-3xl border-2 border-dashed border-green-200 p-6 text-center">
            <p className="text-lead font-semibold">ราคา: ตามจำนวนพนักงานและฟังก์ชันที่เลือก</p>
            <p className="mt-1 text-body text-green-200">ทักไลน์มาขอใบเสนอราคาได้ฟรี</p>
            <div className="mt-5">
              <LineButton />
            </div>
          </div>
        </div>
      </section>

      {/* ===== คำถามที่พบบ่อย ===== */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-6 px-4 py-16 sm:px-6">
        <h2 className="text-center text-title font-bold text-green-900">คำถามที่พบบ่อย</h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border-2 border-green-200 bg-white p-5 open:border-green-700"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lead font-semibold text-green-900">
                {f.q}
                <span className="text-2xl text-green-500 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-body text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== ติดต่อเรา ===== */}
      <section id="contact" className="scroll-mt-6 px-4 pb-20 sm:px-6">
        <div className="card-pop mx-auto max-w-3xl p-8 text-center sm:p-12">
          <h2 className="text-title font-bold text-green-900">อยากให้ทีมใช้ HR ง่ายขึ้น?</h2>
          <p className="mx-auto mt-3 max-w-md text-body text-ink-soft">
            ทักมาคุยกันก่อนได้ ไม่มีค่าใช้จ่าย เราพร้อมสาธิตการใช้งานให้ดู
          </p>
          <div className="mt-8">
            <LineButton big />
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-body text-ink-soft sm:flex-row sm:gap-8">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-700">
              <LineIcon className="h-5 w-5 text-line" />
              LINE: {LINE_ID}
            </a>
            <span className="flex items-center gap-2">
              <Icon name="clock" className="h-5 w-5 text-green-700" />
              {OPEN_HOURS}
            </span>
          </div>
        </div>
      </section>

      {/* ===== ส่วนท้าย ===== */}
      <footer className="bg-green-900 py-8 text-center text-sm text-green-200">
        <p className="font-semibold text-white">HR WTO</p>
        <p className="mt-1">ระบบ HR ใช้ง่าย 2 ภาษา ไทย–พม่า</p>
        <p className="mt-3">© 2026 HR WTO</p>
      </footer>
    </div>
  );
}
