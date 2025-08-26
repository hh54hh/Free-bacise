export default function About() {
  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', color: 'black', margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #ccc', padding: '15px 10px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>
          <a href="/" style={{ color: 'black', textDecoration: 'none' }}>تكنولوجيا 2025</a>
        </h1>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>أخبار التطوير والتكنولوجيا</p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 10px' }}>
        
        <article>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 20px 0', textAlign: 'center' }}>
            من نحن
          </h2>

          <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '25px' }}>
            <p style={{ margin: '0 0 15px 0' }}>
              تكنولوجيا 2025 هو موقع متخصص في تقديم أحدث الأخبار والمقالات في مجال التطوير والتكنولوجيا باللغة العربية.
            </p>
            
            <p style={{ margin: '0 0 15px 0' }}>
              نهدف إلى توفير محتوى تقني عالي الجودة يساعد المطورين والمهتمين بالتكنولوجيا على البقاء محدثين بآخر التطورات في هذا المجال.
            </p>

            <p style={{ margin: '0 0 15px 0' }}>
              يغطي موقعنا مواضيع متنوعة تشمل:
            </p>

            <ul style={{ margin: '0 0 20px 20px', padding: 0 }}>
              <li style={{ margin: '0 0 8px 0' }}>الذكاء الاصطناعي والتعلم الآلي</li>
              <li style={{ margin: '0 0 8px 0' }}>تطوير الويب والتطبيقات</li>
              <li style={{ margin: '0 0 8px 0' }}>الأمن السيبراني</li>
              <li style={{ margin: '0 0 8px 0' }}>البرمجة والتطوير</li>
              <li style={{ margin: '0 0 8px 0' }}>التقنيات الناشئة والابتكار</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '20px', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0' }}>رسالتنا</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
              نسعى لجعل التكنولوجيا في متناول الجميع من خلال تقديم محتوى مبسط ومفهوم باللغة العربية، مما يساهم في نشر المعرفة التقنية في المنطقة العربية.
            </p>
          </div>

          <div style={{ backgroundColor: '#f0f8ff', padding: '20px', marginBottom: '25px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 15px 0' }}>معلومات الاتصال</h3>
            <p style={{ fontSize: '16px', margin: '0 0 10px 0' }}>
              <strong>البريد الإلكتروني:</strong> info@tech2025.com
            </p>
            <p style={{ fontSize: '16px', margin: '0 0 10px 0' }}>
              <strong>الموقع:</strong> www.tech2025.com
            </p>
            <p style={{ fontSize: '16px', margin: 0 }}>
              <strong>التأسيس:</strong> 2025
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <a 
              href="/" 
              style={{ 
                backgroundColor: '#0066cc', 
                color: 'white', 
                padding: '12px 24px', 
                textDecoration: 'none', 
                borderRadius: '4px',
                fontSize: '16px'
              }}
            >
              العودة إلى الصفحة الرئيسية
            </a>
          </div>

        </article>

      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd', marginTop: '40px', padding: '20px 10px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
          © 2025 تكنولوجيا 2025 - أخبار التطوير والتكنولوجيا
        </p>
        <div style={{ fontSize: '12px' }}>
          <a href="/about" style={{ color: '#666', margin: '0 10px' }}>من نحن</a>
          <a href="/privacy" style={{ color: '#666', margin: '0 10px' }}>سياسة الخصوصية</a>
        </div>
        <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#888' }}>
          متوافق مع Free Basics • سريع وخفيف
        </p>
      </footer>
    </div>
  );
}
