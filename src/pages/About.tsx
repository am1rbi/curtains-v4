import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-light text-center text-gray-900 mb-8">אודות ®Vecco</h2>
        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
          <p>
            עם יותר מ-10 שנות ניסיון ומאות לקוחות מרוצים, אנחנו כאן כדי לספק לך את הפתרונות המושלמים לעיצוב הבית. אנו מציעים שירותי ייעוץ, התאמה והתקנה מקצועית של וילונות איכותיים, עם דגש על התאמה אישית לצרכים ולהעדפות שלך.
          </p>
          <p>
            הווילונות שלנו לא רק מוסיפים יופי ואלגנטיות לבית, אלא גם מספקים תחושת נוחות, פרטיות ושליטה מלאה בכמות האור. אנו מבינים כמה חשוב לך להרגיש בבית - ולכן אנו שמים דגש על שביעות רצון לקוחות מלאה בכל שלב, מהתכנון ועד ההתקנה.
          </p>
          <p>
            נשמח ללוות אותך בתהליך הבחירה של הווילון המושלם לביתך, ולעזור לך ליצור את האווירה המיוחדת שתמיד חלמת עליה. המומחים שלנו ישמחו להעניק לך יחס אישי, מקצועי ומחויבות לאיכות ללא פשרות.
          </p>
          <p className="font-medium text-gold">
            מעוניינים להפוך את הבית שלכם למקום נעים ומעוצב? צרו איתנו קשר עכשיו לייעוץ חינם ולהתאמת הווילון המושלם עבורכם!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;