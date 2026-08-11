import { CheckIcon, SearchIcon } from '../icons';

const STATS = [
    { label: 'Total Users', value: '12,540', delta: '+12.0%' },
    { label: 'Sessions', value: '8,430', delta: '+8.2%' },
    { label: 'Conversion Rate', value: '3.24%', delta: '+1.6%' },
];

const ACTIVITY = [
    { color: '#4f6bf5', text: 'New user registered', time: '2 min ago' },
    { color: '#22c55e', text: 'Payment received', time: '15 min ago' },
    { color: '#f59e0b', text: 'Support ticket closed', time: '1 hr ago' },
    { color: '#8b5cf6', text: 'New order placed', time: '2 hrs ago' },
];

const TRAFFIC = [
    { label: 'Direct', value: '40%', color: '#4f6bf5' },
    { label: 'Organic', value: '35%', color: '#22c55e' },
    { label: 'Referral', value: '15%', color: '#f59e0b' },
    { label: 'Social', value: '10%', color: '#8b5cf6' },
];

const PROJECT_STEPS = ['Planning', 'Design', 'Development', 'Testing', 'Launch'];

// Donut chart segments: circumference of r=15.9 circle is ~100, so each
// dash length maps directly to a percentage.
const DONUT_SEGMENTS = [
    { color: '#4f6bf5', size: 40, offset: 0 },
    { color: '#22c55e', size: 35, offset: 40 },
    { color: '#f59e0b', size: 15, offset: 75 },
    { color: '#8b5cf6', size: 10, offset: 90 },
];

function Donut() {
    return (
        <svg viewBox="0 0 36 36" className="dash__donut-svg" aria-hidden="true">
            {DONUT_SEGMENTS.map(({ color, size, offset }) => (
                <circle
                    key={color}
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke={color}
                    strokeWidth="4.5"
                    strokeDasharray={`${size} ${100 - size}`}
                    strokeDashoffset={-offset + 25}
                />
            ))}
        </svg>
    );
}

function AreaChart() {
    return (
        <svg viewBox="0 0 300 90" className="dash__chart-svg" preserveAspectRatio="none" aria-hidden="true">
            <defs>
                <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#4f6bf5" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#4f6bf5" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path
                d="M0 75 C25 70 40 55 60 58 C85 62 95 40 120 42 C145 44 155 30 180 33 C205 36 215 20 240 18 C260 16 280 10 300 8 V90 H0 Z"
                fill="url(#chart-fill)"
            />
            <path
                d="M0 75 C25 70 40 55 60 58 C85 62 95 40 120 42 C145 44 155 30 180 33 C205 36 215 20 240 18 C260 16 280 10 300 8"
                fill="none"
                stroke="#6f8bff"
                strokeWidth="2.5"
            />
        </svg>
    );
}

export default function DeviceMockup() {
    return (
        <div className="devices" aria-hidden="true">
            {/* Laptop */}
            <div className="laptop">
                <div className="laptop__screen">
                    <div className="dash">
                        <div className="dash__topbar">
                            <span className="dash__brand">7411 Studio</span>
                            <span className="dash__search">
                                <SearchIcon /> Search
                            </span>
                            <span className="dash__avatar" />
                        </div>
                        <div className="dash__body">
                            <aside className="dash__sidebar">
                                {['Home', 'Dashboard', 'Projects', 'Analytics', 'Payments', 'Settings'].map(
                                    (item, i) => (
                                        <span
                                            key={item}
                                            className={`dash__nav ${i === 1 ? 'is-active' : ''}`}
                                        >
                                            {item}
                                        </span>
                                    ),
                                )}
                            </aside>
                            <div className="dash__main">
                                <span className="dash__title">Dashboard</span>
                                <div className="dash__stats">
                                    {STATS.map(({ label, value, delta }) => (
                                        <div key={label} className="dash__stat">
                                            <span className="dash__stat-label">{label}</span>
                                            <span className="dash__stat-value">{value}</span>
                                            <span className="dash__stat-delta">{delta}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="dash__row">
                                    <div className="dash__panel dash__panel--chart">
                                        <div className="dash__panel-head">
                                            <span>Sessions</span>
                                            <span className="dash__link">View Report</span>
                                        </div>
                                        <AreaChart />
                                    </div>
                                    <div className="dash__panel dash__panel--activity">
                                        <div className="dash__panel-head">
                                            <span>Recent Activity</span>
                                        </div>
                                        <ul>
                                            {ACTIVITY.map(({ color, text, time }) => (
                                                <li key={text}>
                                                    <i style={{ background: color }} />
                                                    <span>{text}</span>
                                                    <em>{time}</em>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="dash__panel dash__panel--traffic">
                                    <div className="dash__panel-head">
                                        <span>Traffic Source</span>
                                    </div>
                                    <div className="dash__traffic">
                                        <Donut />
                                        <ul>
                                            {TRAFFIC.map(({ label, value, color }) => (
                                                <li key={label}>
                                                    <i style={{ background: color }} />
                                                    <span>{label}</span>
                                                    <em>{value}</em>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="laptop__base" />
            </div>

            {/* Phone */}
            <div className="phone">
                <div className="phone__notch" />
                <p className="phone__title">
                    Your Project
                    <br />
                    is in Progress
                </p>
                <div className="phone__ring">
                    <svg viewBox="0 0 36 36">
                        <circle className="phone__ring-track" cx="18" cy="18" r="15.9" />
                        <circle
                            className="phone__ring-fill"
                            cx="18"
                            cy="18"
                            r="15.9"
                            strokeDasharray="75 25"
                            strokeDashoffset="25"
                        />
                    </svg>
                    <span>75%</span>
                </div>
                <ul className="phone__steps">
                    {PROJECT_STEPS.map((step, i) => (
                        <li key={step} className={i < 4 ? 'is-done' : ''}>
                            <i>
                                <CheckIcon />
                            </i>
                            {step}
                        </li>
                    ))}
                </ul>
                <span className="phone__pill">Almost there! 🚀</span>
            </div>
        </div>
    );
}
