import { CardIcon, ReceiptIcon, ShieldIcon } from '../icons';

// Brand wordmarks rendered as styled text/shapes — keeps the page free of
// third-party image assets.
const METHODS = [
    { key: 'visa', node: <span className="paymark paymark--visa">VISA</span> },
    {
        key: 'mastercard',
        node: (
            <span className="paymark paymark--mc" aria-label="Mastercard">
                <i />
                <i />
            </span>
        ),
    },
    { key: 'applepay', node: <span className="paymark paymark--apple">Apple Pay</span> },
    { key: 'gpay', node: <span className="paymark paymark--gpay"><b>G</b> Pay</span> },
    { key: 'paypal', node: <span className="paymark paymark--paypal">PayPal</span> },
    { key: 'stripe', node: <span className="paymark paymark--stripe">stripe</span> },
];

const FEATURES = [
    {
        title: '100% Secure Payments',
        description: 'Your payments are encrypted and safe.',
        Icon: ShieldIcon,
        tone: 'green',
    },
    {
        title: 'Flexible & Convenient',
        description: 'Pay the way that works best for you.',
        Icon: CardIcon,
        tone: 'blue',
    },
    {
        title: 'Receipts & Transparency',
        description: 'Clear invoices and records for every project.',
        Icon: ReceiptIcon,
        tone: 'indigo',
    },
];

export default function PaySecure() {
    return (
        <section className="pay-section">
            <div className="container pay-band">
                <div className="pay-band__intro">
                    <span className="badge-pill">
                        <ShieldIcon /> Secure &amp; Simple
                    </span>
                    <h2>Pay for Work, Securely</h2>
                    <p>Transparent, secure payments for hassle-free collaboration.</p>
                </div>

                <div className="pay-band__methods">
                    {METHODS.map(({ key, node }) => (
                        <div key={key} className="pay-tile">
                            {node}
                        </div>
                    ))}
                </div>

                <ul className="pay-band__features">
                    {FEATURES.map(({ title, description, Icon, tone }) => (
                        <li key={title}>
                            <span className={`pay-feature__icon pay-feature__icon--${tone}`}>
                                <Icon />
                            </span>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
