export default function Index() {
  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', color: 'black', margin: 0, padding: 0 }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #ccc', padding: '15px 10px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>تكنولوجيا 2025</h1>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>أخبار التطوير والتكنولوجيا</p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '20px 10px' }}>
        
        {/* Featured Article */}
        <article style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '0 0 10px 0', lineHeight: '1.4' }}>
            الذكاء الاصطناعي في 2025: تطورات جديدة
          </h2>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '15px' }}>
            15 يناير 2025
          </div>
          <p style={{ fontSize: '16px', lineHeight: '1.6', margin: '0 0 15px 0' }}>
            يشهد عام 2025 تطورات كبيرة في الذكاء الاصطناعي. النماذج اللغوية تص��ح أكثر دقة وفعالية.
          </p>
          <p style={{ fontSize: '16px', lineHeight: '1.6', margin: 0 }}>
            الشركات التقنية تركز على الأمان والشفافية في تطوير الذكاء الاصطناعي.
          </p>
        </article>

        {/* Articles List */}
        <div>
          <article style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              تطوير الويب في 2025: React 19
            </h3>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>10 يناير 2025</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              React 19 يقدم ميزات جديدة تجعل تطوير التطبيقات أسرع وأكثر كفاءة.
            </p>
          </article>

          <article style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              الأمن السيبراني والذكاء الاصطناعي
            </h3>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>8 يناي�� 2025</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              تحديات أمنية جديدة تظهر مع تطور الذكاء الاصطناعي وتتطلب حلول متقدمة.
            </p>
          </article>

          <article style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              البرمجة بدون كود
            </h3>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>5 يناير 2025</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              منصات البرمجة بدون كود تتطور لتمكن الجميع من إنشاء تطبيقات بسهولة.
            </p>
          </article>

          <article style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              البلوك تشين والعملات الرقمية
            </h3>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>3 يناير 2025</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              تطورات جديدة في البلوك تشين مع التركيز على الاستدامة البيئية.
            </p>
          </article>

          <article style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              الحوسبة السحابية الجديدة
            </h3>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>1 يناير 2025</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              خدمات سحابية جديدة بأداء أعلى وتكامل أفضل مع الذكاء الاصطناعي.
            </p>
          </article>

          <article style={{ marginBottom: '25px', padding: '15px', backgroundColor: '#f9f9f9' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 8px 0' }}>
              إنترنت الأشياء IoT
            </h3>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>28 ديسمبر 2024</div>
            <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
              توسع إنترنت الأشياء في المنازل والمدن الذكية مع تحسي��ات الأمان.
            </p>
          </article>
        </div>

        {/* Categories */}
        <section style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>الأقسام</h2>
          <div style={{ display: 'block' }}>
            <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0f8ff', border: '1px solid #e0e0e0' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '16px' }}>البرمجة</h3>
              <p style={{ fontSize: '12px', margin: 0, color: '#666' }}>أحدث تقنيات التطوير</p>
            </div>
            <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#f0fff0', border: '1px solid #e0e0e0' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '16px' }}>الذكاء الاصطناعي</h3>
              <p style={{ fontSize: '12px', margin: 0, color: '#666' }}>مستقبل التكنولوجيا</p>
            </div>
            <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff0f5', border: '1px solid #e0e0e0' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '16px' }}>الأمن السيبراني</h3>
              <p style={{ fontSize: '12px', margin: 0, color: '#666' }}>حماية البيانات</p>
            </div>
            <div style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#fff8f0', border: '1px solid #e0e0e0' }}>
              <h3 style={{ fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '16px' }}>الابتكار</h3>
              <p style={{ fontSize: '12px', margin: 0, color: '#666' }}>أحدث الاختراعات</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd', marginTop: '40px', padding: '20px 10px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}>
          © 2025 تكنولوجيا 2025 - أخبار التطوير والتكنولوجيا
        </p>
        <div style={{ fontSize: '12px', marginBottom: '10px' }}>
          <a href="/about" style={{ color: '#666', margin: '0 10px', textDecoration: 'underline' }}>من نحن</a>
          <a href="/privacy" style={{ color: '#666', margin: '0 10px', textDecoration: 'underline' }}>سياسة الخصوصية</a>
          <a href="mailto:info@tech2025.com" style={{ color: '#666', margin: '0 10px', textDecoration: 'underline' }}>اتصل بنا</a>
        </div>
        <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
          متوافق مع Free Basics • سريع وخفيف
        </p>
      </footer>
    </div>
  );
}
