export default function Education() {
    return <article>
        <h1>השכלה</h1>
        <section>
            <p>
                בוגר תיכון אורט ע"ש אבין, ר"ג; במגמת סייבר ופיזיקה.
            </p>
        </section>
        <section>
            <label htmlFor="grades">
                <p>
                    מגמות לימוד מורחבות (5 יח"ל) וציונים:
                </p>
            </label>
            <list id="grades">
                <li>מתמטיקה (98)</li>
                <li>אנגלית (97)</li>
                <li>סייבר (99)</li>
                <li>מדעי המחשב (93)</li>
                <li>פיזיקה (89)</li>
            </list>
        </section>
    </article>
}