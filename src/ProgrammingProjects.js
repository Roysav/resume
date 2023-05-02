export default function ProgrammingProjects() {
    return <article>
        <h1>פרויקטים תכנותיים</h1>
        <section>
            <h2>פרויקט סיום בסייבר / Django Postgresql Bootstrap Jquery </h2>
            <p>אתר שמאפשר למשתמש לבנות אסטרטגית השקעה במניות דיבידנד, באמצעות אסטרטגית גידור שפיתחתי: קניית המנייה, קניית אופציית put ומכירת אופציית call, ושמירה על דיבידנד. בצורה כזו, הרווח העתידי תלוי בדיבידנד בלבד. את האתר בניתי באמצעות Django ו-postgresql ואת חיזוי הדיבידנד העתידי ביצעתי על ידי רגרסיה לינארית פולינומיאלית ב-python, תוך שימוש ב-numpy ו-pandas. </p>
        </section>
        <section>
            <h2>פרויקט באסמבלי / ASM x86</h2>
            <p>בניתי פרויקט באסמבלי שמקבל קלט מהמשתמש ועל ידי interrupts מציג למשתמש figure המייצג את היסטוגרמת ה-input-ים שלו.</p>
        </section>
        <section>
            <h2>שליפת נתונים מזאפ / Python Scrapy</h2>
            <p>הוצאת נתונים לגבי השוואת מחירים מעמוד חיפוש של זאפ. כולל שימוש ב-async שמזרז את שליחת הבקשות ל-15 דפים בשנייה, והתחזות למשתמשים אנושיים.</p>
        </section>
        <section>
            <h2>Python / Markdown to XML Transpiler</h2>
            <p>בפרויקט זה בניתי tokenizer (lexer) המקבל קוד בפורמט markdown ו-parser המשתמש ב-tokenizer בכדי להעביר את הקוד מפורמט ה-markdown ל-xml ללא שימוש בחבילות חיצוניות ובאמצעות שימוש בתכנות מונחה עצמים ו-metaclasses על מנת לייצר פרויקט מודולרי, נוח להרחבה.</p>
        </section>
    </article>;
}
