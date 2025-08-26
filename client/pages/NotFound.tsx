import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div style={{ direction: 'rtl', fontFamily: 'Arial, sans-serif', backgroundColor: 'white', color: 'black', margin: 0, padding: 0, minHeight: '100vh' }}>
      
      {/* Header */}
      <header style={{ borderBottom: '1px solid #ccc', padding: '15px 10px', textAlign: 'center' }}>
        <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>تكنولوجيا 2025</h1>
        <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>أخبار التطوير والتكنولوجيا</p>
      </header>

      {/* 404 Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '72px', fontWeight: 'bold', margin: '0 0 20px 0', color: '#ddd' }}>404</h2>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 15px 0' }}>الصفحة غير موجودة</h3>
        <p style={{ fontSize: '16px', margin: '0 0 30px 0', color: '#666', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
          عذراً، الصفحة التي تبحث عنها غير موجودة.
        </p>
        <a 
          href="/" 
          style={{ 
            display: 'inline-block', 
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
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#f5f5f5', borderTop: '1px solid #ddd', padding: '20px 10px', textAlign: 'center', position: 'absolute', bottom: 0, width: '100%' }}>
        <p style={{ margin: '0 0 5px 0', fontSize: '14px' }}>
          © 2025 تكنولوجيا 2025 - أخبار الت��وير والتكنولوجيا
        </p>
        <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>
          متوافق مع Free Basics • سريع وخفيف
        </p>
      </footer>
    </div>
  );
};

export default NotFound;
